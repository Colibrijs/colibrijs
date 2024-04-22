import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';

import type { Settings } from '../../types.js';

/** Возвращает правило для обработки css */
export function getCssLoaders(settings: Settings): RuleSetRule {
  const base: Omit<RuleSetRule, 'use'> = {
    test: /\.css$/,
    exclude: /node_modules/,
  };

  if (settings.platform === 'server') {
    return { ...base, use: 'null-loader' };
  }

  return {
    ...base,
    use: [
      MiniCssExtractPlugin.loader,
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
  };
}
