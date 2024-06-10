<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import TextareaStyle from 'primevuelab/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        modelValue: null,
        autoResize: Boolean,
        invalid: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        }
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
