<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Unstyled mode instructs the components not to add any built-in style classes so that they can be styled using custom css or libraries like Tailwind, Bootstrap or PrimeFlex. Visit
            <NuxtLink to="/theming/unstyled">Unstyled mode</NuxtLink> documentation for more information.
        </p>

        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import primevue-lab from "primevue-lab/config";
const app = createApp(App);

app.use(primevue-lab, { unstyled: true });
`
            }
        };
    }
};
</script>
