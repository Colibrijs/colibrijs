import type { MicrofrontendMeta } from '@colibrijs/types';
import { importRemote } from '@module-federation/utilities';
import React, { lazy, Suspense } from 'react';
import type { ComponentType, PropsWithRef } from 'react';

export interface Props<P> {
  /** id элемента */
  id: string;

  /** Название компонента */
  componentName: string;

  /** Название библиотеки к которой относится компонент */
  libraryName: string;

  /** Пропсы, с которыми нужно отрендерить компонент */
  props: JSX.IntrinsicAttributes & PropsWithRef<P>;

  /** Источник, откуда компонент можно подгрузить данные о компоненте (MicrofrontendMeta) */
  src: string;
}

export function Microfrontend<P>({ componentName, libraryName, props, src }: Props<P>) {
  const Component = lazy<ComponentType<P>>(() =>
    importRemote<MicrofrontendMeta<P>>({
      url: src,
      scope: libraryName,
      module: componentName,
      remoteEntryFileName: 'remote.client.js',
    })
  );

  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
}
