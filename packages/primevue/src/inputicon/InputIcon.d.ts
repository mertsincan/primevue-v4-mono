/**
 *
 * InputIcon displays an icon.
 *
 * [Live Demo](https://www.primevuelab.org/inputgroup/)
 *
 * @module inputicon
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type InputIconPassThroughOptionType<T = any> = InputIconPassThroughAttributes | ((options: InputIconPassThroughMethodOptions<T>) => InputIconPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface InputIconPassThroughMethodOptions<T = any> {
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
    parent: T;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link InputIconProps.pt}
 */
export interface InputIconPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InputIconPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface InputIconPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in InputIcon component.
 */
export interface InputIconProps {
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {InputIconPassThroughOptions}
     */
    pt?: PassThrough<InputIconPassThroughOptions>;
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
 * Defines valid slots in InputIcon component.
 */
export interface InputIconSlots {
    /**
     * Custom default template.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in InputIcon component.
 */
export interface InputIconEmitsOptions {}

export declare type InputIconEmits = EmitFn<InputIconEmitsOptions>;

/**
 * **primevuelab - InputIcon**
 *
 * _InputIcon displays text, icon, buttons and other content can be grouped next to an input._
 *
 * [Live Demo](https://www.primevuelab.org/inputtext/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const InputIcon: DefineComponent<InputIconProps, InputIconSlots, InputIconEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        InputIcon: GlobalComponentConstructor<InputIconProps, InputIconSlots, InputIconEmits>;
    }
}

export default InputIcon;
