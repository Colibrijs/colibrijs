import { describe, expect, it } from '@jest/globals';
import path from 'node:path';

import { getPackageJsonPath } from '../get-package-json-path';

describe(getPackageJsonPath.name, () => {
  it('возвращает путь к package.json файлу - считается, что package.json лежит в папке откуда запустили утилиту', () => {
    expect.assertions(1);

    const root = '/peet/peeterson/';

    expect(getPackageJsonPath(root)).toBe(path.resolve(root, './package.json'));
  });
});
