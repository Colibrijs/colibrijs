import { NodeFederationPlugin } from '@module-federation/node';

import { encodePackageName } from '../lib';
import type { Settings } from '../types';

type FederationPluginOptions = ConstructorParameters<typeof NodeFederationPlugin>[0];

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
