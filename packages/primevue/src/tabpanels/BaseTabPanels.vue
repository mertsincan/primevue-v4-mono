<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import TabPanelsStyle from 'primevue-lab/tabpanels/style';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $pcTabPanels: this,
            $parentInstance: this
        };
    }
};
</script>
