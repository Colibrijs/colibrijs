import { describe, expect, it } from '@jest/globals';
import path from 'node:path';

import { defaultSettings, defaultPackageJson } from './testing-data';
import type { PackageJson, Settings } from '../../types';
import { getEntryPoints } from '../get-entry-points';

describe(getEntryPoints.name, () => {
  it('точкой входа main является путь, полученный путём совмещения пути к package.json и поля main', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, main: 'index.js' };
    const settings: Settings = { ...defaultSettings, packageJson, root: '/path/to/package' };
    const entryPoints = getEntryPoints(settings);

    expect(entryPoints).toStrictEqual({
      main: path.join(settings.root, packageJson.main),
    });
  });
});
