export interface Logger {
  log: (message: string) => void;
  error: (message: string) => void;
}

export interface WaitStorybookOptions {
  /** Если указан, будет пытаться найти мета-тэг commit-sha со значением равным этой настройке */
  commitSha?: string;

  /** Логер для вывода дополнительной информации */
  logger: Logger;

  /** Пауза между запросами в секундах */
  pingInterval: number;

  /** Сколько всего будем ждать в секундах */
  timeout: number;

  /** Адрес на котором должен появиться сторибук */
  url: string;
}
