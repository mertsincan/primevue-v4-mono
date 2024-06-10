/**
 *
 * AccordionContent is a helper component for Accordion component.
 *
 * [Live Demo](https://www.primevue-lab.org/accordion/)
 *
 * @module accordioncontentstyle
 *
 */
import { BaseStyle } from '../../base/style/BaseStyle';

export enum AccordionContentClasses {
    /**
     * Class name of the root element
     */
    root = 'p-accordioncontent',
    /**
     * Class name of the content element
     */
    content = 'p-accordioncontent-content'
}

export interface AccordionContentStyle extends BaseStyle {}
