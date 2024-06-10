<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import StepPanelsStyle from 'primevue-lab/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        }
    },
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>
