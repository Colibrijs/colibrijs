import { describe, expect, it } from '@jest/globals';

import { defaultPackageJson, defaultSettings } from './testing-data';
import type { PackageJson } from '../../types';
import { buildComponentSchema } from '../build-component-schema';

describe(buildComponentSchema.name, () => {
  it('выбрасывает ошибку, если модуль не указан в package.json exports', async () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      exports: { './component-a/': './components/component-a/index.ts' },
    };

    await expect(() =>
      buildComponentSchema('./component-b/', { ...defaultSettings, packageJson })
    ).rejects.toThrow(new Error(`"./component-b/" должен быть в package.json exports`));
  });
});
