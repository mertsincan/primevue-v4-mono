<template>
    <DocSectionText v-bind="$attrs">
        <p>Adds primevuelab to your existing project.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
prime vue install
`
            }
        };
    }
};
</script>
