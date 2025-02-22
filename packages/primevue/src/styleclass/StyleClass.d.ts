/**
 *
 * StyleClass manages CSS classes declaratively to during enter/leave animations or just to toggle classes on an element.
 *
 * [Live Demo](https://primevuelab.org/styleclass)
 *
 * @module styleclass
 *
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective';
import { PassThroughOptions } from '../passthrough';
import { DesignToken, HintedString, PassThrough } from '../ts-helpers';

/**
 * Defines options of StyleClass.
 */
export interface StyleClassOptions {
    /**
     * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
     */
    selector?: HintedString<'@next' | '@prev' | '@parent' | '@grandparent'> | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterFromClass?: string | undefined;
    /**
     * Style class to add during enter animation.
     */
    enterActiveClass?: string | undefined;
    /**
     * Style class to add when item begins to get displayed.
     */
    enterToClass?: string | undefined;
    /**
     * Style class to add when item begins to get hidden.
     */
    leaveFromClass?: string | undefined;
    /**
     * Style class to add during leave animation.
     */
    leaveActiveClass?: string | undefined;
    /**
     * Style class to add when leave animation is completed.
     */
    leaveToClass?: string | undefined;
    /**
     * Whether to trigger leave animation when outside of the element is clicked.
     * @defaultValue false
     */
    hideOnOutsideClick?: boolean | undefined;
    /**
     * Adds or removes a class when no enter-leave animation is required.
     */
    toggleClass?: string | undefined;
    /**
     * It generates scoped CSS variables using design tokens for the component.
     */
    dt?: DesignToken<any>;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {StyleClassDirectivePassThroughOptions}
     */
    pt?: PassThrough<StyleClassDirectivePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface StyleClassDirectivePassThroughOptions {
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Binding of StyleClass directive.
 */
export interface StyleClassDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the StyleClass.
     */
    value?: StyleClassOptions | undefined;
}

/**
 * **primevuelab - StyleClass**
 *
 * _StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element._
 *
 * [Live Demo](https://www.primevuelab.org/styleclass/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 */
declare const StyleClass: ObjectDirective;

export default StyleClass;
