import { sendTelegramRequest } from './send-telegram-request';
import type { ReviewOptions } from './types';

export async function responseReview(options: ReviewOptions): Promise<void> {
  const message = `Уважаемый ${options.author} ответил на ревью у : ${options.reviewers}. PR: *${options.title}* - ${options.url}.`;
  await sendTelegramRequest(message, options);
}
