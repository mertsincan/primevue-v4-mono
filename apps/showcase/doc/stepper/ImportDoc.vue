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
import Stepper from 'primevue-lab/stepper';
import StepList from 'primevue-lab/steplist';
import StepPanels from 'primevue-lab/steppanels';
import StepItem from 'primevue-lab/stepitem';
import Step from 'primevue-lab/step';
import StepPanel from 'primevue-lab/steppanel';
`
            }
        };
    }
};
</script>
