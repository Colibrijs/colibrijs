var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fss from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
export function isDirectoryAvailable(directory) {
    try {
        const data = fss.lstatSync(directory);
        return data.isDirectory();
    }
    catch (error) {
        return false;
    }
}
export function saveScreenshots(screenshotId, screenshots, settings) {
    return __awaiter(this, void 0, void 0, function* () {
        createOutputDirectoriesIfNeeded(settings);
        yield Promise.all([
            fs.writeFile(path.resolve(settings.output.reference, `./${screenshotId}.png`), screenshots.reference, 'binary'),
            fs.writeFile(path.resolve(settings.output.actual, `./${screenshotId}.png`), screenshots.actual, 'binary'),
            fs.writeFile(path.resolve(settings.output.diff, `./${screenshotId}.png`), screenshots.diff, 'binary'),
        ]);
    });
}
function createOutputDirectoriesIfNeeded(settings) {
    if (!isDirectoryAvailable(settings.output.actual))
        fss.mkdirSync(settings.output.actual);
    if (!isDirectoryAvailable(settings.output.reference))
        fss.mkdirSync(settings.output.reference);
    if (!isDirectoryAvailable(settings.output.diff))
        fss.mkdirSync(settings.output.diff);
}
//# sourceMappingURL=fs-utils.js.map