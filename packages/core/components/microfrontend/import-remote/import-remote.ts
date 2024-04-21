import { importRemote as importRemoteCsr } from '@module-federation/utilities';

import { importRemoteSsr } from './import-remote-ssr';

export interface ImportRemoteOptions {
  /** Название компонента */
  componentName: string;

  /** Название библиотеки к которой относится компонент */
  libraryName: string;

  /** Источник, откуда компонент можно подгрузить данные о компоненте (MicrofrontendMeta) */
  src: string;

  /** Если true, компонент рендерится на стороне сервера. Иначе на стороне клиента */
  ssr: boolean;
}

export function importRemote<T>(options: ImportRemoteOptions): Promise<T> {
  if (options.ssr) {
    return importRemoteSsr({
      url: options.src,
      scope: options.libraryName,
      module: options.componentName,
      remoteEntryFileName: 'remote.server.js',
    });
  }

  return importRemoteCsr<T>({
    url: options.src,
    scope: options.libraryName,
    module: options.componentName,
    remoteEntryFileName: 'remote.client.js',
  });
}
