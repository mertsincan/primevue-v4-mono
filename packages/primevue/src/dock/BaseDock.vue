<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import DockStyle from 'primevuelab/dock/style';

export default {
    name: 'BaseDock',
    extends: BaseComponent,
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        model: null,
        class: null,
        style: null,
        tooltipOptions: null,
        menuId: {
            type: String,
            default: null
        },
        tabindex: {
            type: Number,
            default: 0
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        ariaLabel: {
            type: String,
            default: null
        },
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: DockStyle,
    provide() {
        return {
            $pcDock: this,
            $parentInstance: this
        };
    }
};
</script>
