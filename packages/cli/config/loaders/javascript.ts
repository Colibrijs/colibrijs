import type { RuleSetRule } from 'webpack';

export function getJavascriptLoaders(): RuleSetRule {
  return {
    test: /\.(?:js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }], ['@babel/preset-react']],
      },
    },
  };
}
