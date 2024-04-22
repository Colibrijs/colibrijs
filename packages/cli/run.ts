import { cwd } from 'node:process';
import { webpack } from 'webpack';
import type { MultiCompiler, MultiStats } from 'webpack';

import { createConfiguration } from './config/webpack.config';
import { getPackageJsonPath, readPackageJson } from './lib';
import type { Logger, RunnerOptions, Settings } from './types';

export async function run(options: RunnerOptions): Promise<void> {
  const logger: Logger = console;
  const root = cwd();
  const packageJsonPath = getPackageJsonPath(root);
  const packageJson = await readPackageJson(packageJsonPath);

  const settings: Omit<Settings, 'platform'> = {
    packageJson,
    packageJsonPath,
    root,
    regime: options.regime,
  };

  const client = createConfiguration({ ...settings, platform: 'client' });
  const server = createConfiguration({ ...settings, platform: 'server' });
  const compiler = webpack([client, server]);
  const stats = await runCompiler(compiler);

  logger.log(stats.toString({ colors: true }));
}

function runCompiler(compiler: MultiCompiler): Promise<MultiStats> {
  return new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      } else {
        resolve(stats as MultiStats);
      }
    });
  });
}
