<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import StepperPanelStyle from 'primevuelab/stepperpanel/style';

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
