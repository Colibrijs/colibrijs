import { Command } from 'commander';

import type { Logger } from './types';
import { waitStorybook } from './wait-storybook';

interface CliOptions {
  url: string;
  commitSha?: string;
  pingInterval?: string;
  timeout?: string;
}

const program = new Command();

program
  .name('wait-storybook')
  .requiredOption('--url <string>', 'Ссылка на которой нужно ждать появления сторибука')
  .option('--commit-sha <string>', 'Коммит из которого должен быть собран сторибук')
  .option('--ping-interval <number>', 'Интервал запросов к сторибуку в секундах', '10')
  .option('--timeout <number>', 'Таймаут ожидания в секундах', '300')
  .action((options: CliOptions) => {
    const pingInterval = options.commitSha ? parseInt(options.commitSha) : 10;
    const timeout = options.timeout ? parseInt(options.timeout) : 300;
    const logger: Logger = console;

    return waitStorybook({ ...options, logger, pingInterval, timeout });
  })
  .parse(process.argv);
