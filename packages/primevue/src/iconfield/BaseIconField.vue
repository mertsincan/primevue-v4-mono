<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import IconFieldStyle from 'primevuelab/iconfield/style';

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
