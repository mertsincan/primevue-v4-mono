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
import Splitter from 'primevuelab/splitter';
import SplitterPanel from 'primevuelab/splitterpanel';
`
            }
        };
    }
};
</script>
