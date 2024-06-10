<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import TabListStyle from 'primevuelab/tablist/style';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>
