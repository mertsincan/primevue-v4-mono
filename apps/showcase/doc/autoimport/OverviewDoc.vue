<template>
    <DocSectionText v-bind="$attrs">
        <p>primevue-lab components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import primevue-lab from "primevue-lab/config";
import InputText from 'primevue-lab/inputtext';
import Button from 'primevue-lab/button';
import App from './App.vue'
const app = createApp(App);

app.use(primevue-lab);
app.component('InputText', InputText);
app.component('Button', Button);
`
            }
        };
    }
};
</script>
