<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import ConfirmDialogStyle from 'primevuelab/confirmdialog/style';

export default {
    name: 'BaseConfirmDialog',
    extends: BaseComponent,
    props: {
        group: String,
        breakpoints: {
            type: Object,
            default: null
        },
        draggable: {
            type: Boolean,
            default: true
        }
    },
    style: ConfirmDialogStyle,
    provide() {
        return {
            $pcConfirmDialog: this,
            $parentInstance: this
        };
    }
};
</script>
