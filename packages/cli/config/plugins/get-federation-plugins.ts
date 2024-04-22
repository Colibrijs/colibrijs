import type { NodeFederationPlugin } from '@module-federation/node';

import { createFederationPlugin } from './create-federation-plugin';
import type { Settings } from '../../types';

export function getFederationPlugins(settings: Settings): NodeFederationPlugin[] {
  return Object.keys(settings.packageJson.exports).map((moduleName) =>
    createFederationPlugin(settings, moduleName)
  );
}
