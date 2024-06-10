<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import DataTable from 'primevue-lab/datatable';
import Column from 'primevue-lab/column';
import ColumnGroup from 'primevue-lab/columngroup';   // optional
import Row from 'primevue-lab/row';                   // optional
`
            }
        };
    }
};
</script>
