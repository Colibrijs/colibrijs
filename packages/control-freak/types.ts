export interface TelegramAuhOptions {
  telegramBotToken: string;
  telegramChatId: string;
}

export interface BaseEventOptions {
  author: string;
  title: string;
  url: string;
}

export interface ReviewOptions extends BaseEventOptions {
  reviewers: string;
}

export interface ResponseReviewOptions extends BaseEventOptions {
  reviewState: string;
  reviewer: string;
}
