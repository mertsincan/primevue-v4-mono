/**
 *
 * InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primevuelab.org/inputgroup/)
 *
 * @module inputgroupaddon
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type InputGroupAddonPassThroughOptionType = InputGroupAddonPassThroughAttributes | ((options: InputGroupAddonPassThroughMethodOptions) => InputGroupAddonPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputGroupAddonPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
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
 * @see {@link InputGroupAddonProps.pt}
 */
export interface InputGroupAddonPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputGroupAddonPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputGroupAddonPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputGroupAddon component.
 */
export interface InputGroupAddonProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputGroupAddonPassThroughOptions}
     */
    pt?: PassThrough<InputGroupAddonPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * Defines valid slots in InputGroupAddon component.
 */
export interface InputGroupAddonSlots {
    /**
     * Custom default template.
     */
    default(): VNode[];
    /**
     * Dynamic content template.
     * @todo
     */
    [key: string]: (node: any) => VNode[];
}

/**
 * Defines valid emits in InputGroupAddon component.
 */
export interface InputGroupAddonEmitsOptions {}

export declare type InputGroupAddonEmits = EmitFn<InputGroupAddonEmitsOptions>;

/**
 * **primevuelab - InputGroupAddon**
 *
 * _InputGroupAddon displays text, icon, buttons and other content can be grouped next to an input._
 *
 * [Live Demo](https://www.primevuelab.org/inputgroupaddon/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputGroupAddon: DefineComponent<InputGroupAddonProps, InputGroupAddonSlots, InputGroupAddonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputGroupAddon: GlobalComponentConstructor<InputGroupAddonProps, InputGroupAddonSlots, InputGroupAddonEmits>;
    }
}

export default InputGroupAddon;
