<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import ButtonStyle from 'primevuelab/button/style';

export default {
    name: 'BaseButton',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        iconClass: {
            type: String,
            default: null
        },
        badge: {
            type: String,
            default: null
        },
        badgeClass: {
            type: String,
            default: null
        },
        badgeSeverity: {
            type: String,
            default: 'secondary'
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        link: {
            type: Boolean,
            default: false
        },
        severity: {
            type: String,
            default: null
        },
        raised: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: null
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    style: ButtonStyle,
    provide() {
        return {
            $pcButton: this,
            $parentInstance: this
        };
    }
};
</script>
