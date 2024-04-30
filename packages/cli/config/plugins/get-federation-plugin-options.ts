import { encodePackageName } from '@colibrijs/module-utils';
import { NodeFederationPlugin } from '@module-federation/node';
import path from 'node:path';

import { getExportOutputDirectory } from '../../lib';

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
  const packageName = path.join(settings.packageJson.name, exportName);
  const encoedPackageName = encodePackageName(packageName);
  const dirname = getExportOutputDirectory(exportName, settings.packageJson);
  const filename = path.join(dirname, `./remote.${settings.platform}.js`);
  const modulePath = settings.packageJson.exports[exportName];

  if (typeof modulePath !== 'string') {
    throw new Error(`"${modulePath}" должен быть в package.json exports`);
  }

  const options: FederationPluginOptions = {
    filename: `./${filename}`,
    name: encoedPackageName,
    exposes: { './component/': modulePath },
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
    options.library = { name: encoedPackageName, type: 'commonjs-module' };
  }

  return options;
}
