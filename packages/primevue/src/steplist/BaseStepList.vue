<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import StepListStyle from 'primevuelab/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        }
    },
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>
