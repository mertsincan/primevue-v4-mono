<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import PopoverStyle from 'primevuelab/popover/style';

export default {
    name: 'BasePopover',
    extends: BaseComponent,
    props: {
        dismissable: {
            type: Boolean,
            default: true
        },
        appendTo: {
            type: [String, Object],
            default: 'body'
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        breakpoints: {
            type: Object,
            default: null
        },
        closeOnEscape: {
            type: Boolean,
            default: true
        }
    },
    style: PopoverStyle,
    provide() {
        return {
            $pcPopover: this,
            $parentInstance: this
        };
    }
};
</script>
