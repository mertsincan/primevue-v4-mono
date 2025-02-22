/**
 *
 * Avatar represents people using icons, labels and images.
 *
 * - [Live Demo](https://primevuelab.org/avatar)
 *
 * @module avatarstyle
 *
 */
import { BaseStyle } from '../../base/style';

export enum AvatarClasses {
    /**
     * Class name of the root element
     */
    root = 'p-avatar',
    /**
     * Class name of the label element
     */
    label = 'p-avatar-label',
    /**
     * Class name of the icon element
     */
    icon = 'p-avatar-icon'
}

export interface AvatarStyle extends BaseStyle {}
