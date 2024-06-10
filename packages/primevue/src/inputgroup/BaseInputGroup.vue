<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import InputGroupStyle from 'primevue-lab/inputgroup/style';

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
