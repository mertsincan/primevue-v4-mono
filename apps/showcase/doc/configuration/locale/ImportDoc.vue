<template>
    <DocSectionText v-bind="$attrs">
        <p>Locale values are stored in the global configuration that becomes accessible after installing the primevuelab.</p>
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

app.use(primevuelab);`
            }
        };
    }
};
</script>
