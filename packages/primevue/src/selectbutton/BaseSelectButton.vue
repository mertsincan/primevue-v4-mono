<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import SelectButtonStyle from 'primevuelab/selectbutton/style';

export default {
    name: 'BaseSelectButton',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        multiple: Boolean,
        allowEmpty: {
            type: Boolean,
            default: true
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        dataKey: null,
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: SelectButtonStyle,
    provide() {
        return {
            $pcSelectButton: this,
            $parentInstance: this
        };
    }
};
</script>
