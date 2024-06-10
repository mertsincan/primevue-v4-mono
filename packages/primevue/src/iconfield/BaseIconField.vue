<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import IconFieldStyle from 'primevue-lab/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
