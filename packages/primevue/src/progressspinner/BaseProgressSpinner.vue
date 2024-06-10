<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import ProgressSpinnerStyle from 'primevuelab/progressspinner/style';

export default {
    name: 'BaseProgressSpinner',
    extends: BaseComponent,
    props: {
        strokeWidth: {
            type: String,
            default: '2'
        },
        fill: {
            type: String,
            default: 'none'
        },
        animationDuration: {
            type: String,
            default: '2s'
        }
    },
    style: ProgressSpinnerStyle,
    provide() {
        return {
            $pcProgressSpinner: this,
            $parentInstance: this
        };
    }
};
</script>
