<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import ToggleButtonStyle from 'primevue-lab/togglebutton/style';

export default {
    name: 'BaseToggleButton',
    extends: BaseComponent,
    props: {
        modelValue: Boolean,
        onIcon: String,
        offIcon: String,
        onLabel: {
            type: String,
            default: 'Yes'
        },
        offLabel: {
            type: String,
            default: 'No'
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: ToggleButtonStyle,
    provide() {
        return {
            $pcToggleButton: this,
            $parentInstance: this
        };
    }
};
</script>
