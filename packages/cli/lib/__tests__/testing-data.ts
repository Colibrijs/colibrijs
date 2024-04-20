import type { PackageJson, Settings } from '../../types';

export const defaultPackageJson: PackageJson = {
  name: '@colibrijs/example',
  main: './entrypoint.js',
  exports: {
    './Example/': './components/example/index.ts',
  },
};

export const defaultSettings: Settings = {
  packageJson: defaultPackageJson,
  packageJsonPath: '/path/to/package/package.json',
  platform: 'client',
  regime: 'production',
  root: '/path/to/package/',
};
