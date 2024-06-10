<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import EditorStyle from 'primevue-lab/editor/style';

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
