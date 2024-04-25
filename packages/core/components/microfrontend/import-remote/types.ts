export interface ImportRemoteOptions {
  /** Название компонента */
  componentName: string;

  /** Название библиотеки к которой относится компонент */
  libraryName: string;

  /** Источник, откуда компонент можно подгрузить компонент */
  src: string;

  /** Если true, компонент рендерится на стороне сервера. Иначе на стороне клиента */
  ssr: boolean;
}
