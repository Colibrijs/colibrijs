import CopyPlugin from 'copy-webpack-plugin';
import path from 'node:path';
import type { Configuration } from 'webpack';

import { createFederationPlugin, encodePackageName, getEntryPoints } from './lib';
import type { Settings } from './types';

export function createConfiguration(settings: Settings): Configuration {
  return {
    entry: getEntryPoints(settings),
    name: settings.platform,
    mode: settings.regime === 'production' ? 'production' : 'development',
    target: false,

    module: {
      rules: [
        {
          test: /\.(?:js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }], ['@babel/preset-react']],
            },
          },
        },
        {
          test: /\.(?:ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
      ],
    },

    optimization: {
      chunkIds: 'named',
    },

    output: {
      chunkFormat: 'commonjs',
      clean: false,
      filename: '[name].js',
      path: path.resolve(settings.root, './dist/'),
      library: {
        name: encodePackageName(settings.packageJson.name),
        type: 'commonjs-module',
      },
    },

    plugins: [
      createFederationPlugin(settings),
      new CopyPlugin({
        patterns: [{ from: settings.packageJsonPath, to: './package.json' }],
      }),
    ],

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  };
}
