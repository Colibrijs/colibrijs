import path from 'node:path';
export function resolveSettings() {
    const outputDirectory = path.resolve(process.cwd(), './screenshots');
    return {
        output: {
            directory: outputDirectory,
            reference: path.resolve(outputDirectory, './reference/'),
            actual: path.resolve(outputDirectory, './actual/'),
            diff: path.resolve(outputDirectory, './diff/'),
        },
    };
}
//# sourceMappingURL=resolve-settings.js.map