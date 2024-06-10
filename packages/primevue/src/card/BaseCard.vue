<script>
import BaseComponent from '@primevuelab/core/basecomponent';
import CardStyle from 'primevuelab/card/style';

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
