<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import AccordionHeaderStyle from 'primevuelab/accordionheader/style';

export default {
    name: 'BaseAccordionHeader',
    extends: BaseComponent,
    props: {
        as: {
            type: String,
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionHeaderStyle,
    provide() {
        return {
            $pcAccordionHeader: this,
            $parentInstance: this
        };
    }
};
</script>
