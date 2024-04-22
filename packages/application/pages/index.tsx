import { Microfrontend } from '@colibrijs/core';
import React, { useMemo } from 'react';

export default function PageIndex() {
  const exampleProps = useMemo(
    () => ({
      title: 'Удалённый компонент',
      text: 'Но тем не менее, рендерюсь здесь',
    }),
    []
  );

  return (
    <Microfrontend
      id="1"
      src={String(process.env.EXAMPLE_URL)}
      libraryName="@colibrijs/example"
      componentName="Example"
      props={exampleProps}
      ssr={typeof window === 'undefined'}
    />
  );
}
