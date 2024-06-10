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
import Tabs from 'primevue-lab/tabs';
import TabList from 'primevue-lab/tablist';
import Tab from 'primevue-lab/tab';
import TabPanels from 'primevue-lab/tabpanels';
import TabPanel from 'primevue-lab/tabpanel';
`
            }
        };
    }
};
</script>
