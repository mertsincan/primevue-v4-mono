<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import TabStyle from 'primevuelab/tab/style';

export default {
    name: 'BaseTab',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: String,
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: TabStyle,
    provide() {
        return {
            $pcTab: this,
            $parentInstance: this
        };
    }
};
</script>
