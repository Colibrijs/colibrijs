import { Microfrontend } from '@colibrijs/core';
import { useMemo } from 'react';

export default function PageIndex() {
  const exampleComponent = useMemo(
    () => ({
      id: '1',
      src: String(process.env.EXAMPLE_URL),
      libraryName: '@colibrijs/example',
      name: 'Example',
    }),
    []
  );

  const exampleProps = useMemo(
    () => ({
      title: 'Удалённый компонент',
      text: 'Но тем не менее, рендерюсь здесь',
    }),
    []
  );

  return <Microfrontend id="1" component={exampleComponent} props={exampleProps} />;
}
