<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import StepsStyle from 'primevuelab/steps/style';

export default {
    name: 'BaseSteps',
    extends: BaseComponent,
    props: {
        id: {
            type: String
        },
        model: {
            type: Array,
            default: null
        },
        readonly: {
            type: Boolean,
            default: true
        },
        activeStep: {
            type: Number,
            default: 0
        }
    },
    style: StepsStyle,
    provide() {
        return {
            $pcSteps: this,
            $parentInstance: this
        };
    }
};
</script>
