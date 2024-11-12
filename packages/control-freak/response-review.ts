import { sendTelegramRequest } from './send-telegram-request';
import type { ResponseReviewOptions, TelegramAuhOptions } from './types';

function getMessage(options: ResponseReviewOptions): string {
  switch (options.reviewState) {
    case 'approved':
      return `Уважаемый ${options.author} ваш pull-request одобрен ${options.reviewer}-ом. PR: *${options.title}* - ${options.url}.`;
    case 'changes_requested':
      return `Уважаемый ${options.author} ваш pull-request требует изменений. Настаивает ${options.reviewer}. PR: *${options.title}* - ${options.url}.`;
    case 'commented':
      return `Уважаемый ${options.author} ваш pull-request прокомментирован ${options.reviewer}-ом. PR: *${options.title}* - ${options.url}.`;
    default:
      throw new Error('Неизвестный статус ревью');
  }
}

export async function responseReview(
  options: ResponseReviewOptions,
  authOptions: TelegramAuhOptions
): Promise<void> {
  const message = getMessage(options);
  await sendTelegramRequest(message, {
    telegramBotToken: authOptions.telegramBotToken,
    telegramChatId: authOptions.telegramChatId,
  });
}
