<script>
import BaseComponent from '@primevue-lab/core/basecomponent';
import CardStyle from 'primevue-lab/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
