import { describe, expect, it } from '@jest/globals';

import { defaultPackageJson, defaultSettings } from '../../../lib/__tests__/testing-data';
import { encodePackageName } from '../../../lib/encode-package-name';
import type { PackageJson, Settings } from '../../../types';
import { getFederationPluginOptions } from '../get-federation-plugin-options';

describe(getFederationPluginOptions.name, () => {
  it('в поле "name" возвращает закодированное имя пакета (packageJson.name)', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const options = getFederationPluginOptions({ ...defaultSettings, packageJson });

    expect(options.name).toBe(encodePackageName('@colibrijs/example'));
  });

  it('exposes является объектом, который полностью соответствует exports в package.json', () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      exports: {
        './ComponentA/': './components/component-a/index.ts',
        './ComponentB/': './components/component-b/index.ts',
      },
    };

    const options = getFederationPluginOptions({ ...defaultSettings, packageJson });

    expect(options.exposes).toStrictEqual(packageJson.exports);
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

  it('если settings.platform = "server", имя файла равно "./name/remote.server.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, packageJson, platform: 'server' };
    const options = getFederationPluginOptions(settings);

    expect(options.filename).toBe('./@colibrijs/example/remote.server.js');
  });

  it('если settings.platform = "server", library.name = закодированному имени пакета', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const options = getFederationPluginOptions({
      ...defaultSettings,
      packageJson,
      platform: 'server',
    });

    expect(options.library?.name).toBe(encodePackageName('@colibrijs/example'));
  });

  it('если settings.platform = "server", library.type = commonjs-module', () => {
    expect.assertions(1);

    const options = getFederationPluginOptions({ ...defaultSettings, platform: 'server' });

    expect(options.library?.type).toBe(encodePackageName('commonjs-module'));
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
