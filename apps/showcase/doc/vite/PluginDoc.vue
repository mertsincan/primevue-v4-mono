<template>
    <DocSectionText v-bind="$attrs">
        <p>
            primevuelab plugin is required to be installed as an application plugin to set up the default <NuxtLink to="/configuration">configuration</NuxtLink>. The plugin is lightweight, only sets up the configuration object without affecting your
            application.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevuelab/config';

const app = createApp(App);
app.use(primevuelab);
`
            }
        };
    }
};
</script>
