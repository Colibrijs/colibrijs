import { Command } from 'commander';

import { requestReview } from './request-review';
import { responseReview } from './response-review';
import type { ResponseReviewOptions, ReviewOptions, TelegramAuhOptions } from './types';

const controlFreak = new Command();

controlFreak
  .command('request-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewers <string>', 'Ревьюеры пулл реквеста')
  .requiredOption('--title <string>', 'Заголовок пулл реквеста')
  .requiredOption('--url <string>', 'Ссылка на пулл реквест')
  .requiredOption('--telegram-bot-token <string>', 'Токен телеграм бота')
  .requiredOption('--telegram-chat-id <string>', 'ID чата телеграм')
  .action(async (options: ReviewOptions & TelegramAuhOptions) => {
    const authOptions = {
      telegramBotToken: options.telegramBotToken,
      telegramChatId: options.telegramChatId,
    };

    const reviewOptions = {
      author: options.author,
      reviewers: options.reviewers,
      title: options.title,
      url: options.url,
    };

    await requestReview(reviewOptions, authOptions);
  });

controlFreak
  .command('response-review')
  .requiredOption('--author <string>', 'Имя автора пулл реквеста')
  .requiredOption('--reviewer <string>', 'Имя ревьюера пулл реквеста')
  .requiredOption('--title <string>', 'Заголовок пулл реквеста')
  .requiredOption('--url <string>', 'Ссылка на пулл реквест')
  .requiredOption('--review-state <string>', 'Статус ревью')
  .requiredOption('--telegram-bot-token <string>', 'Токен телеграм бота')
  .requiredOption('--telegram-chat-id <string>', 'ID чата телеграм')
  .action(async (options: ResponseReviewOptions & TelegramAuhOptions) => {
    const responseReviewOptions = {
      author: options.author,
      reviewer: options.reviewer,
      title: options.title,
      url: options.url,
      reviewState: options.reviewState,
    };

    const telegramAuthOptions = {
      telegramBotToken: options.telegramBotToken,
      telegramChatId: options.telegramChatId,
    };

    await responseReview(responseReviewOptions, telegramAuthOptions);
  });

controlFreak.parse();
