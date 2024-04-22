import type { RuleSetRule } from 'webpack';

export function getTypescriptLoaders(): RuleSetRule {
  return {
    test: /\.(?:ts|tsx)$/,
    exclude: /node_modules/,
    use: 'ts-loader',
  };
}
