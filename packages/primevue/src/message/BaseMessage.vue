<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import MessageStyle from 'primevue-lab/message/style';

export default {
    name: 'BaseMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'info'
        },
        closable: {
            type: Boolean,
            default: false
        },
        life: {
            type: Number,
            default: null
        },
        icon: {
            type: String,
            default: undefined
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    style: MessageStyle,
    provide() {
        return {
            $pcMessage: this,
            $parentInstance: this
        };
    }
};
</script>
