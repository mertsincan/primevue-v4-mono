<script>
import DatePicker from 'primevue-lab/datepicker';

export default {
    name: 'Calendar',
    extends: DatePicker,
    mounted() {
        console.warn('Deprecated since v4. Use DatePicker component instead.');
    }
};
</script>
