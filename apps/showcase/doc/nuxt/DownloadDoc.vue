<template>
    <DocSectionText v-bind="$attrs">
        <p>
            primevuelab is available for download on <a href="https://www.npmjs.com/package/primevuelab">npm Registry</a> along with the official
            <a href="https://www.npmjs.com/package/nuxt-primevuelab" target="_blank" rel="noopener noreferrer">nuxt-primevuelab</a> module.
        </p>
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
npm install --save-dev nuxt-primevuelab@4.0.0-beta.4

# Using yarn
yarn add primevuelab@4.0.0-beta.4
yarn add --dev nuxt-primevuelab@4.0.0-beta.4

# Using pnpm
pnpm add primevuelab@4.0.0-beta.4
pnpm add -D nuxt-primevuelab@4.0.0-beta.4
`
            }
        };
    }
};
</script>
