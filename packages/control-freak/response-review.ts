import { sendTelegramRequest } from './send-telegram-request';
import type { ResponseReviewOptions } from './types';

function getMessage(options: ResponseReviewOptions) {
  if (options.reviewState === 'approved') {
    return `Уважаемый ${options.author} ваш pull-request одобрен ${options.reviewer}-ом. PR: *${options.title}* - ${options.url}.`;
  }
  if (options.reviewState === 'changes_requested') {
    return `Уважаемый ${options.author} ваш pull-request требует изменений. Настаивает ${options.reviewer}. PR: *${options.title}* - ${options.url}.`;
  }
  if (options.reviewState === 'commented') {
    return `Уважаемый ${options.author} ваш pull-request прокомментирован ${options.reviewer}-ом. PR: *${options.title}* - ${options.url}.`;
  }
  throw new Error('Неизвестный статус ревью');
}

export async function responseReview(options: ResponseReviewOptions): Promise<void> {
  const message = getMessage(options);
  await sendTelegramRequest(message, options);
}
