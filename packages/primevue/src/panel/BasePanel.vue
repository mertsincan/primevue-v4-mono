<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import PanelStyle from 'primevuelab/panel/style';

export default {
    name: 'BasePanel',
    extends: BaseComponent,
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: Object,
            default: () => {
                return {
                    severity: 'secondary',
                    text: true,
                    rounded: true
                };
            }
        }
    },
    style: PanelStyle,
    provide() {
        return {
            $pcPanel: this,
            $parentInstance: this
        };
    }
};
</script>
