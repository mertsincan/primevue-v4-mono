<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import ToolbarStyle from 'primevuelab/toolbar/style';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $pcToolbar: this,
            $parentInstance: this
        };
    }
};
</script>
