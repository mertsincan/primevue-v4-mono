import fs from 'fs-extra';
import { resolvePath } from '../../../scripts/build-core.mjs';

const { OUTPUT_DIR } = resolvePath(import.meta.url);

fs.remove(OUTPUT_DIR);
