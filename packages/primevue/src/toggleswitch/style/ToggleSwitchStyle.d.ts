/**
 *
 * ToggleSwitch is used to select a boolean value.
 *
 * [Live Demo](https://www.primevuelab.org/toggleswitch/)
 *
 * @module toggleswitchstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum ToggleSwitchClasses {
    /**
     * Class name of the root element
     */
    root = 'p-toggleswitch',
    /**
     * Class name of the input element
     */
    input = 'p-toggleswitch-input',
    /**
     * Class name of the slider element
     */
    slider = 'p-toggleswitch-slider'
}

export interface ToggleSwitchStyle extends BaseStyle {}
