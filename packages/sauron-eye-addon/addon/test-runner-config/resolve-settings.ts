import path from 'node:path';

export type ScreenshotType = 'reference' | 'actual' | 'diff';

export interface Settings {
  output: Record<ScreenshotType | 'directory', string>;
}

export function resolveSettings(): Settings {
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
