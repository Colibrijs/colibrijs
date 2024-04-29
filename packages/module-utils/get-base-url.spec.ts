import { exampleComponent } from '@colibrijs/mocks/components';
import type { IComponent } from '@colibrijs/types';
import { describe, expect, it } from '@jest/globals';

import { getBaseUrl } from './get-base-url';

describe(getBaseUrl.name, () => {
  it('возвращает ссылку на базовый урл компонента - результат объединения src, libraryName, name', () => {
    expect.assertions(1);

    const component: IComponent = {
      ...exampleComponent,
      name: 'Example',
      libraryName: '@colibrijs/example',
      src: 'https://colibrijs.github.io/colibrijs/main/example',
    };

    expect(getBaseUrl(component)).toBe(
      'https://colibrijs.github.io/colibrijs/main/example/@colibrijs/example/Example'
    );
  });

  it('если в конце src есть слеш, это не приводит к тому, что в результате появляется два слеша', () => {
    expect.assertions(1);

    const component: IComponent = {
      ...exampleComponent,
      name: 'Example',
      libraryName: '@colibrijs/example',
      src: 'https://colibrijs.github.io/colibrijs/main/example/',
    };

    expect(getBaseUrl(component)).toBe(
      'https://colibrijs.github.io/colibrijs/main/example/@colibrijs/example/Example'
    );
  });
});
