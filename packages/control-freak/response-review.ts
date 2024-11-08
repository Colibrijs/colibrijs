import type { Options } from './interfaces';
import { sendTelegramRequest } from './send-telegram-request';

export async function responseReview(options: Options): Promise<void> {
  const message = `Типок ${options.author} ответил на ревью у : ${options.reviewers}. PR: *${options.title}* - ${options.url}.`;
  const url = `https://api.telegram.org/bot${options.telegramBotToken}/sendMessage`;
  const params = new URLSearchParams({
    chat_id: options.telegramChatId,
    text: message,
    parse_mode: 'Markdown',
  });

  await sendTelegramRequest(url, params);
}
