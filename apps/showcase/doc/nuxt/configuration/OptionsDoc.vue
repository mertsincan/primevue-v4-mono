<template>
    <DocSectionText v-bind="$attrs">
        <p>Main configuration settings of primevuelab, refer to the <PrimeVueNuxtLink to="/configuration">configuration</PrimeVueNuxtLink> documentation for details.</p>
    </DocSectionText>
    <DocSectionCode :code="code" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
primevuelab: {
    options: {
        unstyled: true,
        ripple: true,
        inputVariant: 'filled'
    }
}
`
            }
        };
    }
};
</script>
