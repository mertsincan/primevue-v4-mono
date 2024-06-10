<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import StepPanelsStyle from 'primevuelab/steppanels/style';

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
