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
import InputGroup from 'primevue-lab/inputgroup';
import InputGroupAddon from 'primevue-lab/inputgroupaddon';
`
            }
        };
    }
};
</script>
