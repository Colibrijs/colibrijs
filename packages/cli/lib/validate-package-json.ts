import { object, record, string, ZodError, type ZodType } from 'zod';

import type { PackageJson } from '../types';

export const packageJsonSchema: ZodType<PackageJson> = object({
  name: string({
    required_error: 'Укажите имя библиотеки в package.json',
    invalid_type_error: 'Поле "name" в package.json должно быть строкой',
  }).refine((name) => !name.includes('_'), {
    message: 'Значение поля "name" в package.json не должно содержать подчёркиваний',
  }),
  exports: record(string(), string(), {
    required_error: 'Поле "exports" в package.json не указано',
    invalid_type_error:
      'Поле "exports" должно быть объектом, ключами и значениями которого выступают строки',
  }),
});

export function validatePackageJson(
  maybePackageJson: unknown
): asserts maybePackageJson is PackageJson {
  try {
    packageJsonSchema.parse(maybePackageJson);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new TypeError(error.issues.map((issue) => issue.message).join('. '));
    }

    throw error;
  }
}
