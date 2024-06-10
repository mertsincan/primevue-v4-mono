import path from 'path';
import { fileURLToPath } from 'url';

export function resolvePath(metaUrl) {
    const __dirname = path.dirname(fileURLToPath(metaUrl));
    const __workspace = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../');
    const { INPUT_DIR, OUTPUT_DIR } = process.env;
    const INPUT_PATH = path.resolve(__dirname, process.env.INPUT_DIR);
    const OUTPUT_PATH = path.resolve(__dirname, process.env.OUTPUT_DIR);

    return {
        __dirname,
        __workspace,
        INPUT_DIR,
        OUTPUT_DIR,
        INPUT_PATH,
        OUTPUT_PATH
    };
}
