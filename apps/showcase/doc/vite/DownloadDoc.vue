<template>
    <DocSectionText v-bind="$attrs">
        <p>primevue-lab is available for download on <a href="https://www.npmjs.com/package/primevue-lab">npm Registry</a>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install primevue-lab@4.0.0-beta.4

# Using yarn
yarn add primevue-lab@4.0.0-beta.4

# Using pnpm
pnpm add primevue-lab@4.0.0-beta.4
`
            }
        };
    }
};
</script>
