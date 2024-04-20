import { NodeFederationPlugin } from '@module-federation/node';
import { container } from 'webpack';

import { encodePackageName } from '../lib/encode-package-name';
import type { Settings } from '../types';

type FederationPluginOptions = ConstructorParameters<typeof NodeFederationPlugin>[0];

/** Создаёт и возвращает экземпляр ModuleFederationPlugin */
export function createFederationPlugin(settings: Settings): NodeFederationPlugin {
  const options = getFederationPluginOptions(settings);
  return settings.platform === 'server'
    ? new NodeFederationPlugin(options, {})
    : (new container.ModuleFederationPlugin(options) as NodeFederationPlugin);
}

/** Получает package.json и возвращает параметры для ModuleFederationPlugin */
export function getFederationPluginOptions(settings: Settings): FederationPluginOptions {
  const packageName = encodePackageName(settings.packageJson.name);
  const options: FederationPluginOptions = {
    filename: `./${settings.packageJson.name}/remote.${settings.platform}.js`,
    name: packageName,
    exposes: settings.packageJson.exports,
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

  if (settings.platform === 'server') {
    options.library = { name: packageName, type: 'commonjs-module' };
  }

  return options;
}
