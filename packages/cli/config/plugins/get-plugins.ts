import CopyPlugin from 'copy-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';

import { getFederationPlugins } from './get-federation-plugins';
import type { Settings } from '../../types';

export function getPlugins(settings: Settings): WebpackPluginInstance[] {
  return [
    ...getFederationPlugins(settings),
    new CopyPlugin({
      patterns: [{ from: settings.packageJsonPath, to: './package.json' }],
    }),
  ];
}
