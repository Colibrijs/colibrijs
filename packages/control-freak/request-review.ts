export interface Options {
  author: string;
  reviewers: string;
  title: string;
  url: string;
  telegramBotToken: string;
  telegramChatId: string;
}

export async function requestReview(options: Options): Promise<void> {
  const message = `Типок ${options.author} настаивает на ревью у : ${options.reviewers}. PR: *${options.title}* - ${options.url}.`;
  const url = `https://api.telegram.org/bot${options.telegramBotToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        chat_id: options.telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    const body = await response.json();
    if (!body.ok) {
      throw new Error(body.description);
    }
  } catch (error) {
    throw new Error(`При отправке сообщения в телеграм, возникла ошибка ${String(error)}`);
  }
}
