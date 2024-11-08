import { Command } from 'commander';

import type { Options } from './interfaces';
import { requestReview } from './request-review';
import { responseReview } from './response-review';

const controlFreak = new Command();

controlFreak
  .command('request-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewers <string>', 'Ревьюеры пулл реквеста')
  .requiredOption('--title <string>', 'Заголовок пулл реквеста')
  .requiredOption('--url <string>', 'Ссылка на пулл реквест')
  .requiredOption('--telegram-bot-token <string>', 'Токен телеграм бота')
  .requiredOption('--telegram-chat-id <string>', 'ID чата телеграм')
  .action(async (options: Options) => {
    await requestReview(options);
  });

controlFreak
  .command('response-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewers <string>', 'Имя ревьюера пулл реквеста')
  .requiredOption('--title <string>', 'Заголовок пулл реквеста')
  .requiredOption('--url <string>', 'Ссылка на пулл реквест')
  .requiredOption('--telegram-bot-token <string>', 'Токен телеграм бота')
  .requiredOption('--telegram-chat-id <string>', 'ID чата телеграм')
  .action(async (options: Options) => {
    await responseReview(options);
  });

controlFreak.parse();
