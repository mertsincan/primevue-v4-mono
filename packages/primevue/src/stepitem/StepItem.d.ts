/**
 *
 * StepItem is a helper component for Stepper component.
 *
 * [Live Demo](https://www.primevuelab.org/stepper/)
 *
 * @module stepitem
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../../../core/src/basecomponent';
import { PassThroughOptions } from '../passthrough';
import { DefineComponent, DesignToken, EmitFn, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type StepItemPassThroughOptionType = StepItemPassThroughAttributes | ((options: StepItemPassThroughMethodOptions) => StepItemPassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface StepItemPassThroughMethodOptions {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: StepItemProps;
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
 * @see {@link StepItemProps.pt}
 */
export interface StepItemPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: StepItemPassThroughOptionType;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

export interface StepItemPassThroughAttributes {
    [key: string]: any;
}

/**
 * Defines valid properties in StepItem component.
 */
export interface StepItemProps {
    /**
     * Value of step.
     */
    value?: string | number | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StepItemPassThroughOptions}
     */
    pt?: PassThrough<StepItemPassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Defines valid slots in StepItem slots.
 */
export interface StepItemSlots {
    /**
     * Custom content template.
     */
    default(): VNode[];
}

export interface StepItemEmitsOptions {}

export declare type StepItemEmits = EmitFn<StepItemEmitsOptions>;

/**
 * **primevuelab - StepItem**
 *
 * _StepItem is a helper component for Stepper component._
 *
 * [Live Demo](https://www.primevuelab.org/stepper/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 * @group Component
 *
 */
declare const StepItem: DefineComponent<StepItemProps, StepItemSlots, StepItemEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        StepItem: GlobalComponentConstructor<StepItemProps, StepItemSlots, StepItemEmits>;
    }
}

export default StepItem;
