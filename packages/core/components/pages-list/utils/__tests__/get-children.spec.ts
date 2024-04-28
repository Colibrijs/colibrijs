import type { IPage } from '@colibrijs/types';
import { describe, expect, it } from '@jest/globals';

import { getChildren } from '../get-children';

describe(getChildren.name, () => {
  it('возвращает потомков указанной страницы', () => {
    expect.assertions(1);

    const pages: IPage[] = [
      { id: '1', route: '/' },
      { id: '2', route: '/about' },
      { id: '3', route: '/contacts' },
      { id: '4', route: '/users' }, // 3
      { id: '5', route: '/users/1' },
      { id: '6', route: '/users/2' },
      { id: '7', route: '/users/3' },
      { id: '8', route: '/users/4' },
    ];

    expect(getChildren(pages[3]!, pages)).toStrictEqual([
      { id: '5', route: '/users/1' },
      { id: '6', route: '/users/2' },
      { id: '7', route: '/users/3' },
      { id: '8', route: '/users/4' },
    ]);
  });

  it('у главной страницы нет потомков', () => {
    expect.assertions(1);

    const page: IPage = { id: '1', route: '/' };
    const pages: IPage[] = [
      { id: '1', route: '/' },
      { id: '2', route: '/about' },
      { id: '3', route: '/contacts' },
      { id: '4', route: '/users' },
      { id: '5', route: '/users/1' },
      { id: '6', route: '/users/2' },
      { id: '7', route: '/users/3' },
      { id: '8', route: '/users/4' },
    ];

    expect(getChildren(page, pages)).toStrictEqual([]);
  });
});
