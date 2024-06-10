<template>
    <DocSectionText v-bind="$attrs">
        <p>Configuration is managed by the <i>primevuelab</i> instance imported from <i>primevuelab/config</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import PrimeVue from 'primevuelab/config';
const app = createApp(App);

app.use(primevuelab, { /* options */ });
`
            }
        };
    }
};
</script>
