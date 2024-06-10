<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import TabListStyle from 'primevue-lab/tablist/style';

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
