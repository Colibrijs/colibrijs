import { sendTelegramRequest } from './send-telegram-request';
import type { ReviewOptions } from './types';

export async function requestReview(options: ReviewOptions): Promise<void> {
  const message = `Уважаемый ${options.author} настаивает на ревью у : ${options.reviewers}. PR: *${options.title}* - ${options.url}.`;
  await sendTelegramRequest(message, options);
}
