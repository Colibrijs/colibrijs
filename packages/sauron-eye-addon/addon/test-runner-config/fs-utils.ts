import fss from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

import type { ScreenshotType, Settings } from './resolve-settings';

export function isDirectoryAvailable(directory: string): boolean {
  try {
    const data = fss.lstatSync(directory);
    return data.isDirectory();
  } catch (error) {
    return false;
  }
}

type Screenshots = Record<ScreenshotType, Buffer>;

export async function saveScreenshots(
  screenshotId: string,
  screenshots: Screenshots,
  settings: Settings
): Promise<void> {
  createOutputDirectoriesIfNeeded(settings);

  await Promise.all([
    fs.writeFile(
      path.resolve(settings.output.reference, `./${screenshotId}.png`),
      screenshots.reference,
      'binary'
    ),
    fs.writeFile(
      path.resolve(settings.output.actual, `./${screenshotId}.png`),
      screenshots.actual,
      'binary'
    ),
    fs.writeFile(
      path.resolve(settings.output.diff, `./${screenshotId}.png`),
      screenshots.diff,
      'binary'
    ),
  ]);
}

function createOutputDirectoriesIfNeeded(settings: Settings): void {
  if (!isDirectoryAvailable(settings.output.actual)) fss.mkdirSync(settings.output.actual);
  if (!isDirectoryAvailable(settings.output.reference)) fss.mkdirSync(settings.output.reference);
  if (!isDirectoryAvailable(settings.output.diff)) fss.mkdirSync(settings.output.diff);
}
