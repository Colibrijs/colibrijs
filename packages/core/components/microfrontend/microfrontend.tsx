import { getCssUrl } from '@colibrijs/module-utils';
import type { IComponent } from '@colibrijs/types';
import { lazy, Suspense } from 'react';
import type { ComponentType, PropsWithRef } from 'react';

import { importRemote } from './import-remote';

export interface Props<P> {
  /** id элемента */
  id: string;

  /** Компонент, который нужно отрендерить */
  component: IComponent;

  /** Пропсы, с которыми нужно отрендерить компонент */
  props: JSX.IntrinsicAttributes & PropsWithRef<P>;
}

export function Microfrontend<P>({ component, props }: Props<P>) {
  const Component = lazy<ComponentType<P>>(() => {
    return importRemote<{ default: ComponentType<P> }>(component);
  });

  return (
    <>
      <link rel="stylesheet" href={getCssUrl(component)} />
      <Suspense>
        <Component {...props} />
      </Suspense>
    </>
  );
}
