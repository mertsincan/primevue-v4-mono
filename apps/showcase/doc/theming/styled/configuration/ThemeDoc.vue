<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>theme</i> property is used to customize the initial theme, prefer the <i>primevue-lab</i> plugin for custom configuration instead of the preconfigured <i>primevue-labStyled</i>.</p>
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
import Aura from '@primevue-lab/themes/aura';

const app = createApp(App);

app.use(primevue-lab, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
`
            }
        };
    }
};
</script>
