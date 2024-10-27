import { Command } from 'commander';

import { sendTelegramMessage } from './run';
export interface Options {
  author: string;
  reviewer: string;
  prTitle: string;
  prUrl: string;
  telegramBotToken: string;
  telegramChatId: string;
}

const controlFreak = new Command();

controlFreak
  .command('request-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewer <string>', 'Имя ревьюера пулл реквеста')
  .requiredOption('--pr-title <string>', 'Заголовок пулл реквеста')
  .requiredOption('--pr-url <string>', 'Ссылка на пулл реквест')
  .requiredOption('--telegram-bot-token <string>', 'Токен телеграм бота')
  .requiredOption('--telegram-chat-id <string>', 'ID чата телеграм')
  .action(async (options: Options) => {
    await sendTelegramMessage(options);
  });

controlFreak
  .command('response-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewer <string>', 'Имя ревьюера пулл реквеста')
  .action((options: Options) => {
    // eslint-disable-next-line no-console -- для эксперимента надо
    console.log(`${options.reviewer} поревьюил пулл реквест от ${options.author}`);
  });

controlFreak.parse();
