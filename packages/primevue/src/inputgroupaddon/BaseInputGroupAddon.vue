<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import InputGroupAddonStyle from 'primevue-lab/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
