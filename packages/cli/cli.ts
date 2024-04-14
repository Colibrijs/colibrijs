import { Command } from 'commander';

import { run } from './run';

const program = new Command('colibri');

program
  .command('build')
  .description('Build microfrontends for production')
  .action(() => run({ regime: 'production' }));

program.parse(process.argv);
