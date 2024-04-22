import CopyPlugin from 'copy-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';

import { createFederationPlugin } from './create-federation-plugin';
import type { Settings } from '../../types';

export function getPlugins(settings: Settings): WebpackPluginInstance[] {
  return [
    createFederationPlugin(settings),
    new CopyPlugin({
      patterns: [{ from: settings.packageJsonPath, to: './package.json' }],
    }),
  ];
}
