<template>
    <DocSectionText v-bind="$attrs">
        <p>Locale values are stored in the global configuration that becomes accessible after installing the primevue-lab.</p>
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

app.use(primevue-lab);`
            }
        };
    }
};
</script>
