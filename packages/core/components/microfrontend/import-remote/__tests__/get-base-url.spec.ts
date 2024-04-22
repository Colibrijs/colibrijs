import { describe, expect, it } from '@jest/globals';

import { defaultImportRemoteOptions } from './testing-data';
import { getBaseUrl } from '../get-base-url';
import type { ImportRemoteOptions } from '../types';

describe(getBaseUrl.name, () => {
  it('возвращает ссылку на базовый урл компонента - результат объединения src, libraryName, componentName', () => {
    expect.assertions(1);

    const options: ImportRemoteOptions = {
      ...defaultImportRemoteOptions,
      componentName: 'Example',
      libraryName: '@colibrijs/example',
      src: 'https://colibrijs.github.io/colibrijs/main/example',
    };

    expect(getBaseUrl(options)).toBe(
      'https://colibrijs.github.io/colibrijs/main/example/@colibrijs/example/Example'
    );
  });

  it('если в конце src есть слеш, это не приводит к тому, что в результате появляется два слеша', () => {
    expect.assertions(1);

    const options: ImportRemoteOptions = {
      ...defaultImportRemoteOptions,
      componentName: 'Example',
      libraryName: '@colibrijs/example',
      src: 'https://colibrijs.github.io/colibrijs/main/example/',
    };

    expect(getBaseUrl(options)).toBe(
      'https://colibrijs.github.io/colibrijs/main/example/@colibrijs/example/Example'
    );
  });
});
