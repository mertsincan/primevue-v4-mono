/**
 *
 * Knob is a form component to define number inputs with a dial.
 *
 * [Live Demo](https://www.primevuelab.org/knob/)
 *
 * @module knobstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum KnobClasses {
    /**
     * Class name of the root element
     */
    root = 'p-knob',
    /**
     * Class name of the range element
     */
    range = 'p-knob-range',
    /**
     * Class name of the value element
     */
    value = 'p-knob-value',
    /**
     * Class name of the text element
     */
    text = 'p-knob-text'
}

export interface KnobStyle extends BaseStyle {}
