import { Command } from 'commander';

import type { Options } from './request-review';
import { requestReview } from './request-review';

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
  .requiredOption('--reviewer <string>', 'Имя ревьюера пулл реквеста')
  .action((options: Options) => {
    // eslint-disable-next-line no-console -- для эксперимента надо
    console.log(`${options.reviewers} поревьюил пулл реквест от ${options.author}`);
  });

controlFreak.parse();
