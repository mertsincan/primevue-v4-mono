<template>
    <DocSectionText v-bind="$attrs">
        <p>
            In <i>nuxt.config</i> file, add the <i>nuxt-primevuelab</i> to the modules section and define <i>primevuelab</i> object for the configuration of the module. View the
            <NuxtLink to="/nuxt/#configuration">module configuration</NuxtLink> section for the available list of options.
        </p>
        <DocSectionCode :code="code1" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevuelab'
    ],
    primevuelab: {
        /* Options */
    }
})
`
            }
        };
    }
};
</script>
