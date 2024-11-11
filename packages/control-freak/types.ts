export interface ReviewOptions {
  author: string;
  reviewers: string;
  title: string;
  url: string;
  telegramBotToken: string;
  telegramChatId: string;
}

export interface ResponseReviewOptions extends ReviewOptions {
  reviewState: string;
}
