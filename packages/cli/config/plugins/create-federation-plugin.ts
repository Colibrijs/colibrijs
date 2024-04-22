import { NodeFederationPlugin } from '@module-federation/node';
import { container } from 'webpack';

import { getFederationPluginOptions } from './get-federation-plugin-options';
import type { Settings } from '../../types';

/** Создаёт и возвращает экземпляр ModuleFederationPlugin */
export function createFederationPlugin(
  settings: Settings,
  exportName: string
): NodeFederationPlugin {
  const options = getFederationPluginOptions(settings, exportName);
  return settings.platform === 'server'
    ? new NodeFederationPlugin(options, {})
    : (new container.ModuleFederationPlugin(options) as NodeFederationPlugin);
}
