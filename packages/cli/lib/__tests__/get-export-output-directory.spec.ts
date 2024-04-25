import { describe, expect, it } from '@jest/globals';

import { defaultPackageJson } from './testing-data';
import type { PackageJson } from '../../types';
import { getExportOutputDirectory } from '../get-export-output-directory';

describe(getExportOutputDirectory.name, () => {
  it('возвращает относительный путь к директории куда нужно положить компонент - "./#{packageJson.name}/#{exportName}"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      name: '@colibrijs/example',
      exports: {
        './some-component/': './some-component/index.ts',
      },
    };

    expect(getExportOutputDirectory('./some-component/', packageJson)).toBe(
      './@colibrijs/example/some-component/'
    );
  });
});
