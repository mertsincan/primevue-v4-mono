<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import FloatLabelStyle from 'primevue-lab/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {},
    style: FloatLabelStyle,
    provide() {
        return {
            $pcFloatLabel: this,
            $parentInstance: this
        };
    }
};
</script>
