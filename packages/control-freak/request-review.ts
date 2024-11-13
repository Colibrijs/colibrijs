import { sendTelegramRequest } from './send-telegram-request';
import type { ReviewOptions, TelegramAuhOptions } from './types';

export async function requestReview(
  options: ReviewOptions,
  authOptions: TelegramAuhOptions
): Promise<void> {
  const message = `Уважаемый ${options.author} настаивает на ревью у : ${options.reviewers}. PR: *${options.title}* - ${options.url}.`;
  await sendTelegramRequest(message, authOptions);
}
