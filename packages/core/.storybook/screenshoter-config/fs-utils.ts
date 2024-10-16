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

export async function removeDirectory(directory: string): Promise<void> {
  if (await isDirectoryAvailable(directory)) {
    try {
      await fs.rm(directory, { recursive: true });
    } catch {
      // ну штош, видимо такой папки
    }
  }
}

type Screenshots = Record<ScreenshotType, Buffer>;

export async function saveScreenshots(
  screenshotId: string,
  screenshots: Screenshots,
  settings: Settings
): Promise<void> {
  await createOutputDirectoriesIfNeeded(settings);

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

let isScreenshotDirsCreated = false;

async function createOutputDirectoriesIfNeeded(settings: Settings): Promise<void> {
  if (isScreenshotDirsCreated) {
    return;
  }

  await fs.mkdir(settings.output.directory);
  await Promise.all([
    fs.mkdir(settings.output.actual),
    fs.mkdir(settings.output.reference),
    fs.mkdir(settings.output.diff),
  ]);

  isScreenshotDirsCreated = true;
}
