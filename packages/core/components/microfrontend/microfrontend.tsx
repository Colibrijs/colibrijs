import type { MicrofrontendMeta } from '@colibrijs/types';
import React, { lazy, useLayoutEffect, useState, useCallback, Suspense } from 'react';
import type { ComponentType, PropsWithRef } from 'react';

import { importRemote, type ImportRemoteOptions } from './import-remote';

export interface Props<P> {
  /** id элемента */
  id: string;

  /** Название компонента */
  componentName: ImportRemoteOptions['componentName'];

  /** Название библиотеки к которой относится компонент */
  libraryName: ImportRemoteOptions['libraryName'];

  /** Пропсы, с которыми нужно отрендерить компонент */
  props: JSX.IntrinsicAttributes & PropsWithRef<P>;

  /** Источник, откуда компонент можно подгрузить данные о компоненте (MicrofrontendMeta) */
  src: ImportRemoteOptions['src'];

  /** Если true, компонент рендерится на стороне сервера. Иначе на стороне клиента */
  ssr: ImportRemoteOptions['ssr'];
}

export function Microfrontend<P>({ componentName, libraryName, props, src, ssr }: Props<P>) {
  // Изначально cssLoaded = true. Если сделать false и выключить javascript, компонент не отрисуется
  // Но, useLayoutEffect выполнится только на стороне клиента и только если javascript включен.
  // Эта настройка нужна, чтобы на стороне клиента, компонент рендерился только после загрузки css.
  const [cssLoaded, setCssLoaded] = useState(true);
  useLayoutEffect(() => setCssLoaded(false), []);

  const Component = lazy<ComponentType<P>>(() => {
    return importRemote<MicrofrontendMeta<P>>({ componentName, libraryName, src, ssr });
  });

  const loadCssHandler = useCallback(() => {
    setCssLoaded(true);
  }, []);

  return (
    <>
      <link rel="stylesheet" href={`${src}/component.css`} onLoad={loadCssHandler} />
      {cssLoaded && (
        <Suspense>
          <Component {...props} />
        </Suspense>
      )}
    </>
  );
}
