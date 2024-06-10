<script>
import ToggleSwitch from 'primevuelab/toggleswitch';

export default {
    name: 'InputSwitch',
    extends: ToggleSwitch,
    mounted() {
        console.warn('Deprecated since v4. Use ToggleSwitch component instead.');
    }
};
</script>
