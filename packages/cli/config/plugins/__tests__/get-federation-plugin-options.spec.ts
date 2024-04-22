import { encodePackageName } from '@colibrijs/module-utils';
import { describe, expect, it } from '@jest/globals';

import { defaultPackageJson, defaultSettings } from '../../../lib/__tests__/testing-data';
import type { PackageJson, Settings } from '../../../types';
import { getFederationPluginOptions } from '../get-federation-plugin-options';

describe(getFederationPluginOptions.name, () => {
  it('в поле "name" возвращает закодированное имя пакета (packageJson.name)', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const options = getFederationPluginOptions({ ...defaultSettings, packageJson }, './Example/');

    expect(options.name).toBe(encodePackageName('@colibrijs/example'));
  });

  it('exposes является объектом, в котором имени ./microfrontend/ соответствует значение экспорта из package.json', () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      exports: {
        './ComponentA/': './components/component-a/index.ts',
        './ComponentB/': './components/component-b/index.ts',
      },
    };

    const options = getFederationPluginOptions(
      { ...defaultSettings, packageJson },
      './ComponentA/'
    );

    expect(options.exposes).toStrictEqual({
      './component/': './components/component-a/index.ts',
    });
  });

  it('filename соответствует шаблону "./#{package.name}/#{exportName}/remote.#{platform}.js', () => {
    expect.assertions(1);

    const packageJson: PackageJson = {
      ...defaultPackageJson,
      exports: {
        './ComponentA/': './components/component-a/index.ts',
        './ComponentB/': './components/component-b/index.ts',
      },
    };

    const settings: Settings = { ...defaultSettings, packageJson, platform: 'client' };
    const options = getFederationPluginOptions(settings, './ComponentA/');

    expect(options.filename).toBe('./@colibrijs/example/ComponentA/remote.client.js');
  });

  it('если settings.platform = "client", имя файла равно "remote.client.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, packageJson, platform: 'client' };
    const options = getFederationPluginOptions(settings, './Example/');

    expect(options.filename).toBe('./@colibrijs/example/Example/remote.client.js');
  });

  it('если settings.platform = "server", имя файла равно "./name/remote.server.js"', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const settings: Settings = { ...defaultSettings, packageJson, platform: 'server' };
    const options = getFederationPluginOptions(settings, './Example/');

    expect(options.filename).toBe('./@colibrijs/example/Example/remote.server.js');
  });

  it('если settings.platform = "server", library.name = закодированному имени пакета', () => {
    expect.assertions(1);

    const packageJson: PackageJson = { ...defaultPackageJson, name: '@colibrijs/example' };
    const options = getFederationPluginOptions(
      {
        ...defaultSettings,
        packageJson,
        platform: 'server',
      },
      './Example/'
    );

    expect(options.library?.name).toBe(encodePackageName('@colibrijs/example'));
  });

  it('если settings.platform = "server", library.type = commonjs-module', () => {
    expect.assertions(1);

    const options = getFederationPluginOptions(
      { ...defaultSettings, platform: 'server' },
      './Example/'
    );

    expect(options.library?.type).toBe(encodePackageName('commonjs-module'));
  });

  it('поле shared имеет статические настройки для react', () => {
    expect.assertions(1);

    const options = getFederationPluginOptions(defaultSettings, './Example/');

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
