<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>definePreset</i> utility is used to customize an existing preset during the primevue-lab setup. The first parameter is the preset to customize and the second is the design tokens to override.</p>
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
import { definePreset } from '@primevue-lab/themes';
import Aura from '@primevue-lab/themes/aura';

const MyPreset = definePreset(Aura, {
    //Your customizations, see the following sections for examples
});

app.use(primevue-lab, {
    theme: {
        preset: MyPreset
    }
 });
`
            }
        };
    }
};
</script>
