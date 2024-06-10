<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import StepItemStyle from 'primevuelab/stepitem/style';

export default {
    name: 'BaseStepItem',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        }
    },
    style: StepItemStyle,
    provide() {
        return {
            $pcStepItem: this,
            $parentInstance: this
        };
    }
};
</script>
