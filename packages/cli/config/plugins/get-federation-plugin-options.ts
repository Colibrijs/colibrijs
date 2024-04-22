import { NodeFederationPlugin } from '@module-federation/node';
import path from 'node:path';

import { encodePackageName } from '../../lib';
import type { Settings } from '../../types';

type FederationPluginOptions = ConstructorParameters<typeof NodeFederationPlugin>[0];

/**
 * Получает package.json и возвращает параметры для ModuleFederationPlugin
 * @param settings - общие настройки сборщика
 * @param exportName - имя экспорта для которого нужно сделать модуль
 * @returns настройки для module federation плагина
 */
export function getFederationPluginOptions(
  settings: Settings,
  exportName: string
): FederationPluginOptions {
  const packageName = encodePackageName(settings.packageJson.name);
  const dirname = path.join(`./${settings.packageJson.name}`, exportName);
  const filename = path.join(dirname, `./remote.${settings.platform}.js`);
  const modulePath = settings.packageJson.exports[exportName];

  if (typeof modulePath !== 'string') {
    throw new Error(`"${modulePath}" должен быть в package.json exports`);
  }

  const options: FederationPluginOptions = {
    filename: `./${filename}`,
    name: packageName,
    exposes: { './microfrontend/': modulePath },
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
