/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primevuelab.org/checkbox/)
 *
 * @module checkboxstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum CheckboxClasses {
    /**
     * Class name of the root element
     */
    root = 'p-checkbox',
    /**
     * Class name of the box element
     */
    box = 'p-checkbox-box',
    /**
     * Class name of the input element
     */
    input = 'p-checkbox-input',
    /**
     * Class name of the icon element
     */
    icon = 'p-checkbox-icon'
}

export interface CheckboxStyle extends BaseStyle {}
