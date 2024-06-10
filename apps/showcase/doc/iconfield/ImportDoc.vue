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
import IconField from 'primevuelab/iconfield';
import InputIcon from 'primevuelab/inputicon';
`
            }
        };
    }
};
</script>
