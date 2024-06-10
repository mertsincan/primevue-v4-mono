import path from 'path';

const baseUrl = '/';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: false,
    modules: ['nuxt-gtag', '@primevue-lab/nuxt-module'],
    components: [
        '~/components',
        {
            path: '~/components/layout',
            prefetch: false
        }
    ],
    vite: {
        resolve: {
            optimizeDeps: {
                disabled: true
            },
            alias: {
                'primevue-lab': path.resolve(__dirname, '../../packages/primevue/src'),
                '@primevue-lab/core': path.resolve(__dirname, '../../packages/core/src'),
                '@primevue-lab/themes/aura': path.resolve(__dirname, '../../packages/themes/src/presets/aura'),
                '@primevue-lab/themes/lara': path.resolve(__dirname, '../../packages/themes/src/presets/lara'),
                '@primevue-lab/themes/nora': path.resolve(__dirname, '../../packages/themes/src/presets/nora'),
                '@primevue-lab/themes': path.resolve(__dirname, '../../packages/themes/src'),
                '@primevue-lab/icons': path.resolve(__dirname, '../../packages/icons/src')
            }
        }
    },
    nitro: {
        alias: {
            'primevue-lab': path.resolve(__dirname, '../../packages/primevue/src'),
            '@primevue-lab/core': path.resolve(__dirname, '../../packages/core/src'),
            '@primevue-lab/themes/aura': path.resolve(__dirname, '../../packages/themes/src/presets/aura'),
            '@primevue-lab/themes/lara': path.resolve(__dirname, '../../packages/themes/src/presets/lara'),
            '@primevue-lab/themes/nora': path.resolve(__dirname, '../../packages/themes/src/presets/nora'),
            '@primevue-lab/themes': path.resolve(__dirname, '../../packages/themes/src'),
            '@primevue-lab/icons': path.resolve(__dirname, '../../packages/icons/src')
        }
    },
    routeRules: {
        '/accessibility': { redirect: { to: '/guides/accessibility', statusCode: 301 } },
        '/installation': { redirect: { to: '/vite', statusCode: 301 } }
    },
    primevue: {
        usePrimeVue: true,
        importTheme: { from: '@/themes/app-theme.js' },
        components: {
            exclude: []
        }
    },
    app: {
        baseURL: baseUrl,
        head: {
            title: 'primevue-lab - Vue UI Component Library',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { name: 'robots', content: 'index,follow' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@primevue-lab' },
                { name: 'twitter:title', content: 'primevue-lab | Vue UI Component Library' },
                { name: 'twitter:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'primevue-lab | Vue UI Component Library' },
                { property: 'og:url', content: 'https://primevue-lab.org/' },
                { property: 'og:description', content: 'The ultimate collection of design-agnostic, flexible and accessible Vue UI Components.' },
                { property: 'og:image', content: 'https://www.primefaces.org/static/social/primevue-lab-preview.jpg' },
                { property: 'og:ttl', content: '604800' }
            ],
            link: [
                { rel: 'icon', href: baseUrl + 'favicon.ico' },
                { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
            ],
            script: [
                {
                    src: baseUrl + 'scripts/prism.js',
                    'data-manual': true
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            contextPath: baseUrl
        }
    },
    gtag: {
        id: 'G-48TTQ6G6KV'
    },
    css: ['primeicons/primeicons.css', '@/assets/styles/flags.css', '@docsearch/css/dist/style.css', '@/assets/styles/tailwind/main.css', '@/assets/styles/layout/layout.scss']
});
