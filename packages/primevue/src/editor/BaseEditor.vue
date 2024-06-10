<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import EditorStyle from 'primevuelab/editor/style';

export default {
    name: 'BaseEditor',
    extends: BaseComponent,
    props: {
        modelValue: String,
        placeholder: String,
        readonly: Boolean,
        formats: Array,
        editorStyle: null,
        modules: null
    },
    style: EditorStyle,
    provide() {
        return {
            $pcEditor: this,
            $parentInstance: this
        };
    }
};
</script>
