/**
 *
 * TabPanels is a helper component for Tabs component.
 *
 * [Live Demo](https://www.primevuelab.org/tabview/)
 *
 * @module tabpanels
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type TabPanelsPassThroughOptionType = TabPanelsPassThroughAttributes | ((options: TabPanelsPassThroughMethodOptions) => TabPanelsPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface TabPanelsPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: TabPanelsProps;
    /**
     * Defines current options.
     */
    context: TabPanelsContext;
    /**
     * Defines valid attributes.
     */
    attrs: any;
    /**
     * Defines parent options.
     */
    parent: any;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link TabPanelsProps.pt}
 */
export interface TabPanelsPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: TabPanelsPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface TabPanelsPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in TabPanels component.
 */
export interface TabPanelsProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {TabPanelsPassThroughOptions}
     */
    pt?: PassThrough<TabPanelsPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines current options in TabPanels component.
 */
export interface TabPanelsContext {
    [key: string]: any;
}

/**
 * Defines valid slots in TabPanels slots.
 */
export interface TabPanelsSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface TabPanelsEmitsOptions {}

export declare type TabPanelsEmits = EmitFn<TabPanelsEmitsOptions>;

/**
 * **primevuelab - TabPanels**
 *
 * _TabPanels is a helper component for Tabs component._
 *
 * [Live Demo](https://www.primevuelab.org/tabs/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const TabPanels: DefineComponent<TabPanelsProps, TabPanelsSlots, TabPanelsEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        TabPanels: GlobalComponentConstructor<TabPanelsProps, TabPanelsSlots, TabPanelsEmits>;
    }
}

export default TabPanels;
