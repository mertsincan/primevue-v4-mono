/**
 *
 * AnimateOnScroll manages CSS classes declaratively to during enter/leave animations on scroll or on page load.
 *
 * [Live Demo](https://primevuelab.org/animateonscroll)
 *
 * @module animateonscroll
 */
import { DirectiveBinding, ObjectDirective } from 'vue';
import { DirectiveHooks } from '../basedirective/BaseDirective';

/**
 * Defines options of AnimateOnScroll.
 */
export interface AnimateOnScrollOptions {
    /**
     * Style class to add when item goes into viewport, use white space as a delimeter to define multiple classes.
     */
    enterClass?: string | undefined;
    /**
     * Style class to add when item leaves the viewport, use white space as a delimeter to define multiple classes.
     */
    leaveClass?: string | undefined;
    /**
     * Specifies the `root` option of the IntersectionObserver API
     */
    root?: Element | Document | null;
    /**
     * Specifies the `rootMargin` option of the IntersectionObserver API
     */
    rootMargin?: string;
    /**
     * Specifies the `threshold` option of the IntersectionObserver API
     */
    threshold?: ReadonlyArray<number>;
}

/**
 * Custom passthrough(pt) directive options.
 */
export interface AnimateOnScrollDirectivePassThroughOptions {
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseDirective.DirectiveHooks}
     */
    hooks?: DirectiveHooks;
}

/**
 * Defines modifiers of AnimateOnScroll.
 */
export interface AnimateOnScrollDirectiveModifiers {
    /**
     * Whether the scroll event listener should be removed after initial run.
     *  @defaultValue true
     */
    once?: boolean | undefined;
}

/**
 * Binding of AnimateOnScroll directive.
 */
export interface AnimateOnScrollDirectiveBinding extends Omit<DirectiveBinding, 'modifiers' | 'value'> {
    /**
     * Value of the AnimateOnScroll.
     */
    value?: AnimateOnScrollOptions | undefined;
    /**
     * Modifiers of the AnimateOnScroll.
     * @type {AnimateOnScrollDirectiveModifiers}
     */
    modifiers?: AnimateOnScrollDirectiveModifiers | undefined;
}

/**
 * **primevuelab - AnimateOnScroll**
 *
 * _AnimateOnScroll manages PrimeFlex CSS classes declaratively to during enter/leave animations on scroll or on page load._
 *
 * [Live Demo](https://www.primevuelab.org/animateonscroll/)
 * --- ---
 * ![primevuelab](https://primefaces.org/cdn/primevuelab/images/logo-100.png)
 *
 */
declare const AnimateOnScroll: ObjectDirective;

export default AnimateOnScroll;
