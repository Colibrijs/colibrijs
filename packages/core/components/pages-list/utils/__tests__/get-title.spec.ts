import { examplePage } from '@colibrijs/mocks/pages';
import type { IPage } from '@colibrijs/types';
import { describe, expect, it } from '@jest/globals';

import { getTitle, type Options } from '../get-title';

describe(getTitle.name, () => {
  it('возвращает только filename роута страницы', () => {
    expect.assertions(2);

    const options: Options<string> = { wrapTitle: (title) => title };
    const deepPage: IPage = { ...examplePage, route: '/users/1/about' };

    expect(getTitle(examplePage, options)).toBe('example');
    expect(getTitle(deepPage, options)).toBe('about');
  });

  it('для главной страницы, возвращает "/"', () => {
    expect.assertions(1);

    const options: Options<string> = { wrapTitle: (title) => title };
    const mainPage: IPage = { ...examplePage, route: '/' };

    expect(getTitle(mainPage, options)).toBe('/');
  });

  it('возвращает результат вызова options.wrapTitle над title', () => {
    expect.assertions(1);

    const options: Options<string> = {
      wrapTitle: (title) => `<span>${title}</span>`,
    };

    expect(getTitle(examplePage, options)).toBe('<span>example</span>');
  });
});
