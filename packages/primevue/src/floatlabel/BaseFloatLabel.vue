<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import FloatLabelStyle from 'primevuelab/floatlabel/style';

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
