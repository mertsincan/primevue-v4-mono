<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import InputGroupStyle from 'primevuelab/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>
