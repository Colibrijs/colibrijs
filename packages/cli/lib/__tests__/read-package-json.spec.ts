import { describe, expect, it, jest } from '@jest/globals';
import fs from 'fs/promises';

import { defaultPackageJson } from './testing-data';
import { packageJsonSchema, readPackageJson } from '../read-package-json';

class NodeError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`NodeError ${code}`);
    this.code = code;
  }
}

describe(readPackageJson.name, () => {
  it('считывает package.json из папки указанной первым параметром', async () => {
    expect.assertions(2);

    const accessSpy = jest.spyOn(fs, 'access').mockResolvedValue();
    const readFileSpy = jest
      .spyOn(fs, 'readFile')
      .mockResolvedValue(JSON.stringify(defaultPackageJson));

    await readPackageJson('/path/to/package');

    expect(accessSpy).toHaveBeenCalledWith('/path/to/package/package.json', fs.constants.R_OK);
    expect(readFileSpy).toHaveBeenCalledWith('/path/to/package/package.json', 'utf-8');
  });

  it('возвращает результат парсинга package.json', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue(JSON.stringify(defaultPackageJson));

    const packageJson = await readPackageJson('/path/to/package');
    expect(packageJson).toStrictEqual(packageJsonSchema.parse(defaultPackageJson));
  });

  it('выбрасывает ошибку, если package.json файл не существует', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockRejectedValue(new NodeError('ENOENT'));

    await expect(readPackageJson('/nonexistent-directory')).rejects.toThrow(
      'Нет файла package.json'
    );
  });

  it('выбрасывает ошибку, если package.json содержит некорректный синтаксис', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue('invalid JSON');

    await expect(readPackageJson('/path/to/package')).rejects.toThrow(
      'Некорректный синтаксис в package.json'
    );
  });

  it('выбрасывает ошибку, если не удаётся считать package.json по непонятной причине', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockRejectedValue(new Error('Unknown error'));

    await expect(readPackageJson('/path/to/package')).rejects.toThrow(
      'Не могу считать package.json'
    );
  });

  it.each([
    { field: 'name', message: 'Укажите имя библиотеки в package.json' },
    { field: 'main', message: 'Поле "main" в package.json не указано' },
  ])('выбрасывает TypeError если поле "$field" отсутствует в package.json', async (testCase) => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue(
      JSON.stringify({
        ...defaultPackageJson,
        [testCase.field]: undefined,
      })
    );

    await expect(readPackageJson('/path/to/package')).rejects.toThrow(
      new TypeError(testCase.message)
    );
  });

  it.each([
    { field: 'name', wrong: true, message: 'Поле "name" в package.json должно быть строкой' },
    { field: 'main', wrong: true, message: 'Поле "main" в package.json должно быть строкой' },
  ])(
    'выбрасывает TypeError если поле "$field" имеет некорректный тип package.json',
    async (testCase) => {
      expect.assertions(1);

      jest.spyOn(fs, 'access').mockResolvedValue();
      jest.spyOn(fs, 'readFile').mockResolvedValue(
        JSON.stringify({
          ...defaultPackageJson,
          [testCase.field]: testCase.wrong,
        })
      );

      await expect(readPackageJson('/path/to/package')).rejects.toThrow(
        new TypeError(testCase.message)
      );
    }
  );
});
