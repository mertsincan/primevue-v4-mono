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
import FocusTrap from 'primevuelab/focustrap';

app.directive('focustrap', FocusTrap);
`
            }
        };
    }
};
</script>
