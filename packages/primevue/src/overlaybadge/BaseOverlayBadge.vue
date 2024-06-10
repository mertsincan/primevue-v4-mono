<script>
import Badge from 'primevuelab/badge';
import OverlayBadgeStyle from 'primevuelab/overlaybadge/style';

export default {
    name: 'OverlayBadge',
    extends: Badge,
    style: OverlayBadgeStyle,
    provide() {
        return {
            $pcOverlayBadge: this,
            $parentInstance: this
        };
    }
};
</script>
