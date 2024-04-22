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
      src={`${process.env.EXAMPLE_URL}@colibrijs/example/Example`}
      libraryName="_colibrijs__example"
      componentName="./Example"
      props={exampleProps}
      ssr={typeof window === 'undefined'}
    />
  );
}
