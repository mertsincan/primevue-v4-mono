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
import DataTable from 'primevuelab/datatable';
import Column from 'primevuelab/column';
import ColumnGroup from 'primevuelab/columngroup';   // optional
import Row from 'primevuelab/row';                   // optional
`
            }
        };
    }
};
</script>
