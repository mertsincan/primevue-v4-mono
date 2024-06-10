<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import ButtonGroupStyle from 'primevue-lab/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
