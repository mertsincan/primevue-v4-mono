<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import InlineMessageStyle from 'primevuelab/inlinemessage/style';

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    style: InlineMessageStyle,
    provide() {
        return {
            $pcInlineMessage: this,
            $parentInstance: this
        };
    }
};
</script>
