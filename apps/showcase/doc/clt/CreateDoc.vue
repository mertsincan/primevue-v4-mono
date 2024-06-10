<template>
    <DocSectionText v-bind="$attrs">
        <p>Creates a new project from scratch with primevuelab.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
prime vue create
`
            }
        };
    }
};
</script>
