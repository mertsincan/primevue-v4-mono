/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primevuelab.org/radiobutton/)
 *
 * @module radiobuttonstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum RadioButtonClasses {
    /**
     * Class name of the root element
     */
    root = 'p-radiobutton',
    /**
     * Class name of the box element
     */
    box = 'p-radiobutton-box',
    /**
     * Class name of the input element
     */
    input = 'p-radiobutton-input',
    /**
     * Class name of the icon element
     */
    icon = 'p-radiobutton-icon'
}

export interface RadioButtonStyle extends BaseStyle {}
