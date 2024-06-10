<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Accordion from 'primevue-lab/accordion';
import AccordionPanel from 'primevue-lab/accordionpanel';
import AccordionHeader from 'primevue-lab/accordionheader';
import AccordionContent from 'primevue-lab/accordioncontent';
`
            }
        };
    }
};
</script>
