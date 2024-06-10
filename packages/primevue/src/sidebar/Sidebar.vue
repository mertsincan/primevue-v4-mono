<script>
import Drawer from 'primevue-lab/drawer';

export default {
    name: 'Sidebar',
    extends: Drawer,
    mounted() {
        console.warn('Deprecated since v4. Use Drawer component instead.');
    }
};
</script>
