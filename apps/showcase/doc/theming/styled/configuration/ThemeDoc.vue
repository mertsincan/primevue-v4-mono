<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>theme</i> property is used to customize the initial theme, prefer the <i>primevuelab</i> plugin for custom configuration instead of the preconfigured <i>primevuelabStyled</i>.</p>
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
import Aura from '@primevuelab/themes/aura';

const app = createApp(App);

app.use(primevuelab, {
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
