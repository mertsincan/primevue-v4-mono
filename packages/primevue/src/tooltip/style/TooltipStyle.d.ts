/**
 *
 * Tooltip directive provides advisory information for a component.
 *
 * [Live Demo](https://primevuelab.org/tooltip)
 *
 * @module tooltipstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum TooltipClasses {
    /**
     * Class name of the root element
     */
    root = 'p-tooltip',
    /**
     * Class name of the arrow element
     */
    arrow = 'p-tooltip-arrow',
    /**
     * Class name of the text element
     */
    text = 'p-tooltip-text'
}

export interface TooltipStyle extends BaseStyle {}
