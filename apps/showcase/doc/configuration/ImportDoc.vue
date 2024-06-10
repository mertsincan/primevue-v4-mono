<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>primevue-lab</i> instance imported from <i>primevue-lab/config</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import primevue-lab from 'primevue-lab/config';
const app = createApp(App);

app.use(primevue-lab, { /* options */ });
`
            }
        };
    }
};
</script>
