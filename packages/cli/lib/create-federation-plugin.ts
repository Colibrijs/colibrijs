import { container } from 'webpack';

import { encodePackageName } from './encode-package-name';
import type { Settings } from '../types';

type FederationPluginConstructorOptions = ConstructorParameters<
  typeof container.ModuleFederationPlugin
>[0];

/** Создаёт и возвращает экземпляр ModuleFederationPlugin */
export function createFederationPlugin(settings: Settings): container.ModuleFederationPlugin {
  const options = getFederationPluginOptions(settings);
  return new container.ModuleFederationPlugin(options);
}

/** Получает package.json и возвращает параметры для ModuleFederationPlugin */
export function getFederationPluginOptions(settings: Settings): FederationPluginConstructorOptions {
  const packageName = encodePackageName(settings.packageJson.name);
  const options: FederationPluginConstructorOptions = {
    filename: `./${settings.packageJson.name}/remote.${settings.platform}.js`,
    name: packageName,
    exposes: {
      [packageName]: settings.packageJson.main,
    },
    shared: {
      react: {
        requiredVersion: '^18',
        import: 'react',
        shareKey: 'react',
        shareScope: 'default',
        singleton: true,
      },
    },
  };

  return options;
}
