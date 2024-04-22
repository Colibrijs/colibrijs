import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { RuleSetRule } from 'webpack';

/** Возвращает правило для обработки css */
export function getCssLoaders(): RuleSetRule {
  return {
    test: /\.css$/,
    exclude: /node_modules/,
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
