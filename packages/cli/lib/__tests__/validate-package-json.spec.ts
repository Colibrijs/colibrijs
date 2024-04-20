import { describe, expect, it } from '@jest/globals';

import { defaultPackageJson } from './testing-data';
import type { PackageJson } from '../../types';
import { validatePackageJson } from '../validate-package-json';

describe(validatePackageJson.name, () => {
  it.each([
    { field: 'name', message: 'Укажите имя библиотеки в package.json' },
    { field: 'main', message: 'Поле "main" в package.json не указано' },
    { field: 'exports', message: 'Поле "exports" в package.json не указано' },
  ])('выбрасывает TypeError если поле "$field" отсутствует в package.json', (testCase) => {
    expect.assertions(1);

    const packageJson: Partial<PackageJson> = { ...defaultPackageJson };

    // осознанно удаляю поле для теста. Тест должен проверить, что без этого поля, функция выбрасывает ошибку
    // @ts-expect-error - ругается, не может определить тип packageJson без поля из-за того что поле динамически вычисляется
    delete packageJson[testCase.field]; // eslint-disable-line @typescript-eslint/no-dynamic-delete -- выше описал

    expect(() => validatePackageJson(packageJson)).toThrow(new TypeError(testCase.message));
  });

  it.each([
    { field: 'name', message: 'Поле "name" в package.json должно быть строкой' },
    { field: 'main', message: 'Поле "main" в package.json должно быть строкой' },
    {
      field: 'exports',
      message:
        'Поле "exports" должно быть объектом, ключами и значениями которого выступают строки',
    },
  ])('выбрасывает TypeError если поле "$field" имеет некорректный тип package.json', (testCase) => {
    expect.assertions(1);

    const packageJson: Partial<PackageJson> = { ...defaultPackageJson };

    // ни у одного из полей package.json не должно быть поля с типом number. Тест проверяет что поле
    // должно иметь правильный тип. То есть для теста корректно выставить некорректно значение.
    // @ts-expect-error - ругается, не может определить тип packageJson без поля из-за того что поле динамически вычисляется
    packageJson[testCase.field] = 5;

    expect(() => validatePackageJson(packageJson)).toThrow(new TypeError(testCase.message));
  });
});
