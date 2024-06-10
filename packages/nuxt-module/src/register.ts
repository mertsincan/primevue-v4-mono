import { addComponent, addImports } from '@nuxt/kit';
import { components } from './runtime/core/components';
import { composables } from './runtime/core/composables';
import { directives } from './runtime/core/directives';
import { Utils } from './utils';

import type { ComponentType, ComponentsType } from './runtime/core/components/types';
import type { ComposableType, ComposablesType } from './runtime/core/composables/types';
import type { DirectiveType, DirectivesType } from './runtime/core/directives/types';
import type { ConstructsType, ItemType } from './runtime/core/types';
import type { ModuleOptions, ResolvePathOptions } from './types';

function registerItems(items: any[] = [], options: ConstructsType = {}, params: any) {
    const included = Utils.object.getValue(options.include, params);
    const excluded = Utils.object.getValue(options.exclude, params);
    const isMatched = (name: string, tName: any) => name?.toLowerCase() === (Utils.object.isString(tName) ? tName?.toLowerCase() : tName?.name?.toLowerCase());

    return items.filter((item) => {
        const name = item?.name;
        const matchedIn = included === '*' || included === undefined ? true : Utils.object.isNotEmpty(included) ? included.some((inc: any) => isMatched(name, inc)) : false;
        const matchedEx = included === '*' && excluded === '*' ? false : excluded === '*' ? true : Utils.object.isNotEmpty(excluded) ? excluded.some((exc: any) => isMatched(name, exc)) : false;

        return matchedIn && !matchedEx;
    });
}

function registerConfig(resolvePath: any) {
    return [
        {
            name: 'PrimeVue',
            as: 'PrimeVue',
            from: resolvePath({ name: 'PrimeVue', as: 'PrimeVue', from: `primevuelab/config`, type: 'config' })
        }
    ];
}

function registerComponents(resolvePath: any, options: ComponentsType = {}) {
    const items: ComponentType[] = registerItems(components, options, { components });

    return items.map((item: ComponentType) => {
        const _item = { ...item, name: item.name, as: item.name, from: `primevuelab/${item.name.toLowerCase()}` };
        const name = Utils.object.getName(_item, options);
        const from = resolvePath({ name, as: _item.as, from: _item.from, type: 'component' });
        const opt = {
            export: 'default',
            name,
            filePath: from,
            global: true
        };

        addComponent(opt);

        return {
            ..._item,
            ...opt
        };
    });
}

function registerDirectives(resolvePath: any, options: DirectivesType = {}) {
    const items: DirectiveType[] = registerItems(directives, options, { directives });

    return items.map((item: DirectiveType) => {
        const name = Utils.object.getName(item, options);
        const opt = {
            ...item,
            name,
            from: resolvePath({ name, as: item.as, from: item.from, type: 'directive' })
        };

        return opt;
    });
}

function registerComposables(resolvePath: any, options: ComposablesType = {}) {
    const items: ComposableType[] = registerItems(composables, options, { composables });

    return items.map((item: ComposableType) => {
        const name = item.name; //Utils.object.getName(item, options);
        const opt = {
            ...item,
            name,
            from: resolvePath({ name, as: item.as, from: item.from, type: 'composable' })
        };

        addImports(opt);

        return opt;
    });
}

function registerServices(resolvePath: any, registered: any) {
    const services: any = new Set<string>();

    registered?.components?.forEach((component: ComponentType) => component?.use && services.add(component.use.as));

    return [...services].map((service) => ({
        name: service,
        as: service,
        from: resolvePath({ name: service, as: service, from: `primevuelab/${service.toLowerCase()}`, type: 'service' })
    }));
}

function registerStyles(resolvePath: any, registered: any, options: any) {
    const styles: ItemType[] = [
        {
            name: 'BaseStyle',
            as: 'BaseStyle',
            from: resolvePath({ name: 'BaseStyle', as: 'BaseStyle', from: '@primevuelab/core/base/style', type: 'style' })
        }
    ];

    if (!options?.unstyled) {
        if (Utils.object.isNotEmpty(registered?.components)) {
            styles.push({
                name: 'BaseComponentStyle',
                as: 'BaseComponentStyle',
                from: resolvePath({ name: 'BaseComponentStyle', as: 'BaseComponentStyle', from: '@primevuelab/core/basecomponent/style', type: 'style' })
            });
        }

        [registered.components, registered.directives]
            .flat()
            .reduce((acc: any[], citem: any) => (acc.some((item) => item.as.toLowerCase() === citem.as.toLowerCase()) ? acc : [...acc, citem]), [])
            .forEach((item: any) =>
                styles.push({
                    name: `${item.as}Style`,
                    as: `${item.as}Style`,
                    from: resolvePath({ name: `${item.as}Style`, as: `${item.as}Style`, from: `primevuelab/${item.as.toLowerCase()}/style`, type: 'style' })
                })
            );
    }

    return styles;
}

function registerInjectStylesAsString(options: any) {
    return [];
}

function registerInjectStylesAsStringToTop(options: any) {
    return [Utils.object.createStyleAsString(options.cssLayerOrder ? `@layer ${options.cssLayerOrder}` : undefined, { name: 'layer-order' })];
}

export function register(moduleOptions: ModuleOptions) {
    const resolvePath = (resolveOptions: ResolvePathOptions) => Utils.object.getPath(moduleOptions.resolvePath, resolveOptions);

    const config = registerConfig(resolvePath);
    const components = registerComponents(resolvePath, moduleOptions.components);
    const directives = registerDirectives(resolvePath, moduleOptions.directives);
    const composables = registerComposables(resolvePath, moduleOptions.composables);
    const registered = {
        components,
        directives,
        composables
    };
    const services = registerServices(resolvePath, registered);
    const styles = registerStyles(resolvePath, registered, moduleOptions.options);
    const injectStylesAsString = registerInjectStylesAsString(moduleOptions);
    const injectStylesAsStringToTop = registerInjectStylesAsStringToTop(moduleOptions);

    return {
        config,
        ...registered,
        services,
        styles,
        injectStylesAsString,
        injectStylesAsStringToTop
    };
}
