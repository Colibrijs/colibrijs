import type { Options } from './cli';

export async function sendTelegramMessage(options: Options): Promise<void> {
  const reviewers = JSON.parse(options.reviewer).map(
    (reviewer: { login: string }) => reviewer.login
  );

  for (const reviewer of reviewers) {
    const message = `Типок ${options.author} настаивает на ревью у : ${reviewer}. PR: *${options.prTitle}* - ${options.prUrl}.`;
    const url = `https://api.telegram.org/bot${options.telegramBotToken}/sendMessage`;
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          chat_id: options.telegramChatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      });
    } catch (error) {
      throw new Error('Не удалось отправить сообщение в телеграм');
    }
  }
}
