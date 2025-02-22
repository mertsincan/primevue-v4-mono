import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// @todo - Remove
const __dirname = dirname(fileURLToPath(import.meta.url));

// globals
const GLOBALS = {
    vue: 'Vue'
};

// externals
const GLOBAL_EXTERNALS = ['vue', 'chart.js/auto', 'quill'];
const INLINE_EXTERNALS = [/@primevuelab\/core\/.*/, /@primevuelab\/icons\/.*/];
const EXTERNALS = [...GLOBAL_EXTERNALS, ...INLINE_EXTERNALS];

// alias
const ALIAS_ENTRIES = [
    {
        find: /^primevuelab\/(.*)$/,
        replacement: path.resolve(__dirname, './src/$1'),
        customResolver(source, importer) {
            const basedir = path.dirname(importer);
            const folderPath = path.resolve(basedir, source);
            const folderName = path.basename(folderPath);

            const fName = folderName === 'style' ? `${path.basename(path.dirname(folderPath))}Style` : folderName;
            const files = fs.readdirSync(folderPath);
            const targetFile = files.find((file) => {
                const ext = path.extname(file);
                return ['.vue', '.js'].includes(ext) && path.basename(file, ext).toLowerCase() === fName.toLowerCase();
            });

            return targetFile ? path.join(folderPath, targetFile) : null;
        }
    },
    // @todo - Remove
    { find: '@primevuelab/core/api', replacement: path.resolve(__dirname, '../core/src/api/Api.js') },
    { find: '@primevuelab/core/base/style', replacement: path.resolve(__dirname, '../core/src/base/style/BaseStyle.js') },
    { find: '@primevuelab/core/base', replacement: path.resolve(__dirname, '../core/src/base/Base.js') },
    { find: '@primevuelab/core/basecomponent/style', replacement: path.resolve(__dirname, '../core/src/basecomponent/style/BaseComponentStyle.js') },
    { find: '@primevuelab/core/basecomponent', replacement: path.resolve(__dirname, '../core/src/basecomponent/BaseComponent.vue') },
    { find: '@primevuelab/core/basedirective', replacement: path.resolve(__dirname, '../core/src/basedirective/BaseDirective.js') },
    { find: '@primevuelab/core/config', replacement: path.resolve(__dirname, '../core/src/config/primevuelab.js') },
    { find: '@primevuelab/core/service', replacement: path.resolve(__dirname, '../core/src/service/PrimeVueService.js') },
    { find: '@primevuelab/core/usestyle', replacement: path.resolve(__dirname, '../core/src/usestyle/UseStyle.js') },
    { find: '@primevuelab/core/utils', replacement: path.resolve(__dirname, '../core/src/utils/Utils.js') },
    { find: '@primevuelab/icons/baseicon/style', replacement: path.resolve(__dirname, '../icons/src/baseicon/style/BaseIconStyle.js') },
    { find: '@primevuelab/icons/baseicon', replacement: path.resolve(__dirname, '../icons/src/baseicon/BaseIcon.vue') },
    { find: '@primevuelab/themes', replacement: path.resolve(__dirname, '../themes/src/index.js') }
];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    extensions: ['.js', '.vue'],
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env'],
    plugins: [],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const ALIAS_PLUGIN_OPTIONS = {
    entries: ALIAS_ENTRIES
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: true
    },
    mangle: {
        reserved: ['theme', 'css']
    }
};

const PLUGINS = [vue(), postcss(POSTCSS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS)];

const ENTRY = {
    entries: [],
    onwarn(warning) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
            //console.error(`(!) ${warning.message}`);
            return;
        }
    },
    format: {
        cjs_es(options) {
            return ENTRY.format.cjs(options).es(options);
        },
        cjs({ input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
                external: EXTERNALS,
                inlineDynamicImports: true,
                output: [
                    {
                        format: 'cjs',
                        file: `${output}${minify ? '.min' : ''}.cjs`,
                        sourcemap: true,
                        exports: 'auto'
                    }
                ]
            });

            ENTRY.update.packageJson({ input, output, options: { main: `${output}.cjs` } });

            return ENTRY.format;
        },
        es({ input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
                external: EXTERNALS,
                inlineDynamicImports: true,
                output: [
                    {
                        format: 'es',
                        file: `${output}${minify ? '.min' : ''}.mjs`,
                        sourcemap: true,
                        exports: 'auto'
                    }
                ]
            });

            ENTRY.update.packageJson({ input, output, options: { main: `${output}.mjs`, module: `${output}.mjs` } });

            return ENTRY.format;
        },
        umd({ name, input, output, minify }) {
            ENTRY.entries.push({
                onwarn: ENTRY.onwarn,
                input,
                plugins: [alias(ALIAS_PLUGIN_OPTIONS), resolve(), ...PLUGINS, minify && terser(TERSER_PLUGIN_OPTIONS)],
                external: GLOBAL_EXTERNALS,
                inlineDynamicImports: true,
                output: [
                    {
                        format: 'umd',
                        name: name ?? 'primevuelab',
                        file: `${output}${minify ? '.min' : ''}.js`,
                        globals: GLOBALS,
                        exports: 'auto'
                    }
                ]
            });

            return ENTRY.format;
        }
    },
    update: {
        packageJson({ input, output, options }) {
            try {
                const inputDir = path.resolve(__dirname, path.dirname(input));
                const outputDir = path.resolve(__dirname, path.dirname(output));
                const packageJson = path.resolve(outputDir, 'package.json');

                !fs.existsSync(packageJson) && fs.copySync(path.resolve(inputDir, './package.json'), packageJson);

                const pkg = JSON.parse(fs.readFileSync(packageJson, { encoding: 'utf8', flag: 'r' }));

                !pkg?.main?.includes('.cjs') && (pkg.main = path.basename(options?.main) ?? pkg.main);
                pkg.module = path.basename(options?.module) ?? packageJson.module;

                fs.writeFileSync(packageJson, JSON.stringify(pkg, null, 4));
            } catch {}
        }
    }
};

function addFile() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach((file) => {
                let name = file.split(/(.vue)$|(.js)$/)[0].toLowerCase();

                if (name === folderName) {
                    const input = process.env.INPUT_DIR + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + folderName + '/' + name;

                    ENTRY.format.es({ input, output });
                }
            });
        });
}

function addStyle() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            try {
                fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName + '/style')).forEach((file) => {
                    if (/\.js$/.test(file)) {
                        const name = file.split(/(.js)$/)[0].toLowerCase();
                        const input = process.env.INPUT_DIR + folderName + '/style/' + file;
                        const output = process.env.OUTPUT_DIR + folderName + '/style/' + name;

                        ENTRY.format.es({ input, output });
                    }
                });
            } catch {}
        });
}

function addPassThrough() {
    ENTRY.format.es({ input: process.env.INPUT_DIR + 'passthrough/index.js', output: process.env.OUTPUT_DIR + 'passthrough/index' });
}

function addLibrary() {
    ENTRY.format.umd({ name: 'PrimeVue', input: process.env.INPUT_DIR + 'primevue.js', output: process.env.OUTPUT_DIR + 'umd/primevue', minify: true });
}

function addPackageJson() {
    try {
        const outputDir = path.resolve(__dirname, process.env.OUTPUT_DIR);
        const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, './package.json'), { encoding: 'utf8', flag: 'r' }));

        delete pkg.scripts;
        delete pkg.devDependencies;
        delete pkg.publishConfig;

        !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
        fs.writeFileSync(path.resolve(outputDir, 'package.json'), JSON.stringify(pkg, null, 4));
    } catch {}
}

addFile();
addStyle();
addPassThrough();
addLibrary();
addPackageJson();

export default ENTRY.entries;
