import { init, loadRemote } from '@module-federation/enhanced/runtime';

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

const host = init({
  name: '@colibrijs/core',
  remotes: [],
});

export function importRemote<T>(options: ImportRemoteOptions): Promise<T> {
  const moduleName = `${options.libraryName}/${options.componentName}`;
  const alreadyregistered = host.options.remotes.some((remote) => remote.name === moduleName);

  if (!alreadyregistered) {
    const entry = `${options.src}/remote.client.js`;
    host.registerRemotes([{ name: moduleName, entry }]);
  }

  return loadRemote(moduleName) as Promise<T>;
}
