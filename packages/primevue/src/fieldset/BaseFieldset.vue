<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import FieldsetStyle from 'primevuelab/fieldset/style';

export default {
    name: 'BaseFieldset',
    extends: BaseComponent,
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
    style: FieldsetStyle,
    provide() {
        return {
            $pcFieldset: this,
            $parentInstance: this
        };
    }
};
</script>
