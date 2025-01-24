import fs from 'node:fs';
import path from 'node:path';
import { isDirectoryAvailable } from './addon/test-runner-config';
const screenshotDirectory = path.resolve(process.cwd(), './screenshots');
if (!isDirectoryAvailable(screenshotDirectory)) {
    fs.mkdirSync(screenshotDirectory);
    fs.writeFileSync(path.resolve(screenshotDirectory, './file.txt'), 'гыы', 'utf-8');
}
export default {
    staticDirs: [
        {
            from: screenshotDirectory,
            to: '/screenshots',
        },
    ],
};
//# sourceMappingURL=preset.js.map