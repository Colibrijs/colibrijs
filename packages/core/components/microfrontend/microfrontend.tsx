import type { MicrofrontendMeta } from '@colibrijs/types';
import React, { lazy, Suspense } from 'react';
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
  const Component = lazy<ComponentType<P>>(() => {
    return importRemote<MicrofrontendMeta<P>>({ componentName, libraryName, src, ssr });
  });

  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
}
