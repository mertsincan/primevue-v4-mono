<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import MessageStyle from 'primevuelab/message/style';

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
