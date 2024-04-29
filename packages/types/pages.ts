export interface IPage {
  /** ID страницы */
  id: string;

  /** Название страницы */
  name: string;

  /** Ссылка по которой будет доступна страница */
  route: string;
}

export type IPageConstructorOptions = Omit<IPage, 'id'>;
