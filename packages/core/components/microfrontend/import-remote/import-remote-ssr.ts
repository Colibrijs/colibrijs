// Весь код ниже - костыль рождённый в муках. Главное, что он работает. Может когда-то положение дел
// module federation на стороне сервера выйден на новый уровень. Но на момент написания этого кода,
// нет ни одного примера, который подгружает удалённый модуль на стороне nodejs. Только если заранее
// знаешь адрес. Но мы не знаем адрес с которого будем подгружать. В этом и проблема.

import type { ImportRemoteOptions, WebpackRemoteContainer } from '@module-federation/utilities';

// Webpack добавляет эту переменную после выполнения __webpack_init_sharing__
declare const __webpack_share_scopes__: Record<string, string>;

/** Загружает удалённый модуль на стороне сервера */
export async function importRemoteSsr(options: ImportRemoteOptions) {
  const { url, module, remoteEntryFileName } = options;
  const fullUrl = `${url}/${remoteEntryFileName}`;

  // @ts-expect-error ругается на то что fake - это типа не модуль. Всё под контролем, он должен быть
  import('./fake');

  __webpack_init_sharing__('default');

  const container = await new Promise<WebpackRemoteContainer>((resolve) =>
    // @ts-expect-error не знает что такое l. То что typescript не знает что такое l, не значит, что там такого нет
    __webpack_require__.l(fullUrl, resolve, module)
  );

  if (!__webpack_share_scopes__.default) {
    // @ts-expect-error странный очень код, но оно работает. __webpack_init_sharing__ добавляет null
    // в __webpack_share_scopes__.default. Этот код инициализирует там RemoteContainer. Код ублюдошный
    container.init(__webpack_share_scopes__.default);
  }

  // @ts-expect-error после инициализации выше, в контейнере появляется options.scope. Здесь так же всё под контролем
  const factory = await container[options.scope].get(module);

  return factory();
}
