<template>
    <DocSectionText v-bind="$attrs">
        <p>primevuelab plugin is required to be installed as an application plugin to set up the default <NuxtLink to="/configuration">configuration</NuxtLink>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
app.use(primevuelab.Config);
`
            }
        };
    }
};
</script>
