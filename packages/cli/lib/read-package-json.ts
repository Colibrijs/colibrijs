import fs from 'node:fs/promises';
import { object, string, ZodError, ZodType } from 'zod';

import type { PackageJson } from '../types';

export const packageJsonSchema: ZodType<PackageJson> = object({
  name: string({
    required_error: 'Укажите имя библиотеки в package.json',
    invalid_type_error: 'Поле "name" в package.json должно быть строкой',
  }),
  main: string({
    required_error: 'Поле "main" в package.json не указано',
    invalid_type_error: 'Поле "main" в package.json должно быть строкой',
  }),
});

/**
 * Возвращает содержимое package.json файла
 * @param packageJsonPath - абсолютный путь к package.json файлу
 */
export async function readPackageJson(packageJsonPath: string): Promise<PackageJson> {
  try {
    await fs.access(packageJsonPath, fs.constants.R_OK);

    const packageJsonContent = await fs.readFile(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(packageJsonContent);

    return packageJsonSchema.parse(packageJson);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Некорректный синтаксис в package.json');
    }

    if (error instanceof ZodError) {
      throw new TypeError(error.issues.map((issue) => issue.message).join('. '));
    }

    if (isErrorWithCode(error) && error.code === 'ENOENT') {
      throw new Error('Нет файла package.json');
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
