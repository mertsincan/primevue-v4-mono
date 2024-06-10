<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import TagStyle from 'primevuelab/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $pcTag: this,
            $parentInstance: this
        };
    }
};
</script>
