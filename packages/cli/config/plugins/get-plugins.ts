import CopyPlugin from 'copy-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';

import { createMiniCssExtractPlugin } from './create-mini-css-extract-plugin';
import { getFederationPlugins } from './get-federation-plugins';
import type { Settings } from '../../types';

export function getPlugins(settings: Settings): WebpackPluginInstance[] {
  return [
    ...getFederationPlugins(settings),
    createMiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: settings.packageJsonPath, to: './package.json' }],
    }),
  ];
}
