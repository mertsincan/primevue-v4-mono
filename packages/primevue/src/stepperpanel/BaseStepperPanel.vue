<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import StepperPanelStyle from 'primevue-lab/stepperpanel/style';

export default {
    name: 'BaseStepperPanel',
    extends: BaseComponent,
    props: {
        header: null
    },
    style: StepperPanelStyle,
    provide() {
        return {
            $pcStepperPanel: this,
            $parentInstance: this
        };
    }
};
</script>
