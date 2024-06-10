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
import Tabs from 'primevuelab/tabs';
import TabList from 'primevuelab/tablist';
import Tab from 'primevuelab/tab';
import TabPanels from 'primevuelab/tabpanels';
import TabPanel from 'primevuelab/tabpanel';
`
            }
        };
    }
};
</script>
