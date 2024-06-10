<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import AccordionContentStyle from 'primevuelab/accordioncontent/style';

export default {
    name: 'BaseAccordionContent',
    extends: BaseComponent,
    props: {
        as: {
            type: String,
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionContentStyle,
    provide() {
        return {
            $pcAccordionContent: this,
            $parentInstance: this
        };
    }
};
</script>
