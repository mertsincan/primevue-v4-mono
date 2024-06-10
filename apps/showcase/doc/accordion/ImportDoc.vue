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
import Accordion from 'primevuelab/accordion';
import AccordionPanel from 'primevuelab/accordionpanel';
import AccordionHeader from 'primevuelab/accordionheader';
import AccordionContent from 'primevuelab/accordioncontent';
`
            }
        };
    }
};
</script>
