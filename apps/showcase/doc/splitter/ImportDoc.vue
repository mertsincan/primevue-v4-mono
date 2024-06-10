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
import Splitter from 'primevue-lab/splitter';
import SplitterPanel from 'primevue-lab/splitterpanel';
`
            }
        };
    }
};
</script>
