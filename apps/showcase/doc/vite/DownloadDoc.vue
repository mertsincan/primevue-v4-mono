<template>
    <DocSectionText v-bind="$attrs">
        <p>primevuelab is available for download on <a href="https://www.npmjs.com/package/primevuelab">npm Registry</a>.</p>
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
npm install primevuelab@4.0.0-beta.4

# Using yarn
yarn add primevuelab@4.0.0-beta.4

# Using pnpm
pnpm add primevuelab@4.0.0-beta.4
`
            }
        };
    }
};
</script>
