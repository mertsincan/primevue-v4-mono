<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import ToggleButtonStyle from 'primevuelab/togglebutton/style';

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
