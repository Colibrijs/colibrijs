import { describe, expect, it } from '@jest/globals';

import { defaultPackageJson, defaultSettings } from './testing-data';
import type { PackageJson, Settings } from '../../types';
import { getFederationPluginOptions } from '../create-federation-plugin';
import { encodePackageName } from '../encode-package-name';

describe(getFederationPluginOptions.name, () => {
  it('в поле "name" возвращает закодированное имя пакета (packageJson.name)', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const options = getFederationPluginOptions({ ...defaultSettings, packageJson });

    expect(options.name).toBe(encodePackageName('@colibrijs/example'));
  });

  it('exposes является объектом, где закодированное имя пакета соответствует значению package.json main', () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      name: '@colibrijs/example',
      main: 'index.js',
    };

    const options = getFederationPluginOptions({ ...defaultSettings, packageJson });

    expect(options.exposes).toStrictEqual({
      [encodePackageName('@colibrijs/example')]: 'index.js',
    });
  });

  it('filename соответствует шаблону "./#{package.name}/remote.#{platform}.js', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, packageJson, platform: 'client' };
    const options = getFederationPluginOptions(settings);

    expect(options.filename).toBe('./@colibrijs/example/remote.client.js');
  });

  it('если settings.platform = "client", имя файла равно "./name/remote.client.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, packageJson, platform: 'client' };
    const options = getFederationPluginOptions(settings);

    expect(options.filename).toBe('./@colibrijs/example/remote.client.js');
  });

  it('поле shared имеет статические настройки для react', () => {
    expect.assertions(1);

    const options = getFederationPluginOptions(defaultSettings);

    expect(options.shared).toStrictEqual({
      react: {
        requiredVersion: '^18',
        import: 'react',
        shareKey: 'react',
        shareScope: 'default',
        singleton: true,
      },
    });
  });
});
