import path from 'node:path';
import type { Configuration } from 'webpack';

import { getEntryPoints } from './entry';
import { getPlugins } from './plugins';
import { encodePackageName } from '../lib';
import type { Settings } from '../types';

export function createConfiguration(settings: Settings): Configuration {
  return {
    entry: getEntryPoints(),
    name: settings.platform,
    mode: settings.regime === 'production' ? 'production' : 'development',
    plugins: getPlugins(settings),
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
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path][name]__[local]',
                },
              },
            },
            'postcss-loader',
          ],
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

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  };
}
