/**
 *
 * ProgressBar is a process status indicator.
 *
 * [Live Demo](https://www.primevuelab.org/progressbar)
 *
 * @module progressbar
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type ProgressBarPassThroughOptionType<T = any> = ProgressBarPassThroughAttributes | ((options: ProgressBarPassThroughMethodOptions<T>) => ProgressBarPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface ProgressBarPassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: ProgressBarProps;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
    /**
     * Defines parent instance.
     */
    parent: T;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link ProgressBarProps.pt}
 */
export interface ProgressBarPassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ProgressBarPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the value's DOM element.
     */
    value?: ProgressBarPassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ProgressBarPassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface ProgressBarPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in ProgressBar component.
 */
export interface ProgressBarProps {
    /**
     * Current value of the progress.
     */
    value?: number | undefined;
    /**
     * Defines the mode of the progress
     * @defaultValue determinate
     */
    mode?: 'determinate' | 'indeterminate' | undefined;
    /**
     * Whether to display the progress bar value.
     * @defaultValue true
     */
    showValue?: boolean | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {ProgressBarPassThroughOptions}
     */
    pt?: PassThrough<ProgressBarPassThroughOptions>;
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
 * Defines valid slots in ProgressBar component.
 */
export interface ProgressBarSlots {
    /**
     * Custom content slot.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in ProgressBar component.
 */
export interface ProgressBarEmitsOptions {}

export declare type ProgressBarEmits = EmitFn<ProgressBarEmitsOptions>;

/**
 * **primevuelab - ProgressBar**
 *
 * ProgressBar is a process status indicator._
 *
 * [Live Demo](https://www.primevuelab.org/progressbar/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const ProgressBar: DefineComponent<ProgressBarProps, ProgressBarSlots, ProgressBarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        ProgressBar: GlobalComponentConstructor<ProgressBarProps, ProgressBarSlots, ProgressBarEmits>;
    }
}

export default ProgressBar;
