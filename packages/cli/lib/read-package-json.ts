import fs from 'node:fs/promises';

import { validatePackageJson } from './validate-package-json';
import type { PackageJson } from '../types';

/**
 * Возвращает содержимое package.json файла
 * @param packageJsonPath - абсолютный путь к package.json файлу
 */
export async function readPackageJson(packageJsonPath: string): Promise<PackageJson> {
  try {
    await fs.access(packageJsonPath, fs.constants.R_OK);

    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    validatePackageJson(packageJson);
    return packageJson;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Некорректный синтаксис в package.json');
    }

    if (isErrorWithCode(error) && error.code === 'ENOENT') {
      throw new Error('Нет файла package.json');
    }

    if (error instanceof TypeError) {
      throw error;
    }

    throw new Error('Не могу считать package.json');
  }
}

type ErrorWithCode = Error & { code: unknown };

/**
 * Returns true if error is instanceof Error and has property code
 * @param error
 */
function isErrorWithCode(error: unknown): error is ErrorWithCode {
  return error instanceof Error && 'code' in error;
}
