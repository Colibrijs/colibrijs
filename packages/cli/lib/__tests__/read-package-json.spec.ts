import { describe, expect, it, jest } from '@jest/globals';
import fs from 'fs/promises';

import { defaultPackageJson } from './testing-data';
import { readPackageJson } from '../read-package-json';
import * as validatePackageJsonModule from '../validate-package-json';

class NodeError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(`NodeError ${code}`);
    this.code = code;
  }
}

describe(readPackageJson.name, () => {
  it('считывает package.json по пути указанном в первом параметре', async () => {
    expect.assertions(2);

    const accessSpy = jest.spyOn(fs, 'access').mockResolvedValue();
    const readFileSpy = jest
      .spyOn(fs, 'readFile')
      .mockResolvedValue(JSON.stringify(defaultPackageJson));

    await readPackageJson('/path/to/package/package.json');

    expect(accessSpy).toHaveBeenCalledWith('/path/to/package/package.json', fs.constants.R_OK);
    expect(readFileSpy).toHaveBeenCalledWith('/path/to/package/package.json', 'utf-8');
  });

  it('возвращает результат парсинга package.json', async () => {
    expect.assertions(1);

    const packageJsonRaw = JSON.stringify(defaultPackageJson);
    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue(packageJsonRaw);

    const packageJson = await readPackageJson('/path/to/package');
    expect(packageJson).toStrictEqual(JSON.parse(packageJsonRaw));
  });

  it('выбрасывает ошибку, если package.json файл не существует', async () => {
    expect.assertions(1);

    jest.spyOn(fs, 'access').mockRejectedValue(new NodeError('ENOENT'));

    await expect(readPackageJson('/nonexistent-directory/package.json')).rejects.toThrow(
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

  it('выбрасывает ошибку, если validatePackageJson выбросило ошибку', async () => {
    expect.assertions(1);

    const error = new TypeError('some shit happend');
    jest.spyOn(fs, 'access').mockResolvedValue();
    jest.spyOn(fs, 'readFile').mockResolvedValue(JSON.stringify(defaultPackageJson));
    jest.spyOn(validatePackageJsonModule, 'validatePackageJson').mockImplementation(() => {
      throw error;
    });

    await expect(() => readPackageJson('/path/to/package')).rejects.toThrow(error);
  });
});
