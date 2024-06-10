<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import ButtonGroupStyle from 'primevuelab/buttongroup/style';

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
