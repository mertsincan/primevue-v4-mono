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
import Stepper from 'primevuelab/stepper';
import StepList from 'primevuelab/steplist';
import StepPanels from 'primevuelab/steppanels';
import StepItem from 'primevuelab/stepitem';
import Step from 'primevuelab/step';
import StepPanel from 'primevuelab/steppanel';
`
            }
        };
    }
};
</script>
