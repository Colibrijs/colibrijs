import type { MicrofrontendMeta } from '@colibrijs/types';
import React, { lazy, Suspense } from 'react';
import type { ComponentType, PropsWithRef } from 'react';

import { getBaseUrl, importRemote, type ImportRemoteOptions } from './import-remote';

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

export function Microfrontend<P>(props: Props<P>) {
  // Здесь пропсы нужно перепрокидывать в другие функции. Неудобно пересобирать
  // eslint-disable-next-line react/destructuring-assignment -- выше описал
  const { componentName, libraryName, props: componentProps, src, ssr } = props;
  const cssUrl = `${getBaseUrl(props)}/component.css`;

  const Component = lazy<ComponentType<P>>(() => {
    return importRemote<MicrofrontendMeta<P>>({ componentName, libraryName, src, ssr });
  });

  return (
    <Suspense>
      <link rel="stylesheet" href={cssUrl} />
      <Component {...componentProps} />
    </Suspense>
  );
}
