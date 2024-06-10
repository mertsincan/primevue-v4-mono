<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import DynamicDialogStyle from 'primevue-lab/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>
