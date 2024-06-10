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
const GLOBAL_EXTERNALS = ['vue'];
const INLINE_EXTERNALS = [/@primevue-lab\/themes\/.*/];
const EXTERNALS = [...GLOBAL_EXTERNALS, ...INLINE_EXTERNALS];

// alias
const ALIAS_ENTRIES = [
    {
        find: /^primevue-lab\/core\/(.*)$/,
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
    { find: '@primevue-lab/themes', replacement: path.resolve(__dirname, '../themes/src/index.js') }
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
                        name: name ?? 'primevue-lab',
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
addPackageJson();

export default ENTRY.entries;
