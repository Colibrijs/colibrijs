import type { IPage } from '@colibrijs/types';
import { describe, expect, it } from '@jest/globals';

import { getChildren } from '../get-children';

describe(getChildren.name, () => {
  it('возвращает потомков указанной страницы', () => {
    expect.assertions(1);

    const pages: IPage[] = [
      { id: '1', name: 'Главная', route: '/' },
      { id: '2', name: 'О нас', route: '/about' },
      { id: '3', name: 'Контакты', route: '/contacts' },
      { id: '4', name: 'Пользователи', route: '/users' },
      { id: '5', name: 'Пользователь 1', route: '/users/1' },
      { id: '6', name: 'Пользователь 2', route: '/users/2' },
      { id: '7', name: 'Пользователь 3', route: '/users/3' },
      { id: '8', name: 'Пользователь 4', route: '/users/4' },
    ];

    expect(getChildren(pages[3]!, pages)).toStrictEqual([
      { id: '5', name: 'Пользователь 1', route: '/users/1' },
      { id: '6', name: 'Пользователь 2', route: '/users/2' },
      { id: '7', name: 'Пользователь 3', route: '/users/3' },
      { id: '8', name: 'Пользователь 4', route: '/users/4' },
    ]);
  });

  it('у главной страницы нет потомков', () => {
    expect.assertions(1);

    const page: IPage = { id: '1', name: 'Главная', route: '/' };
    const pages: IPage[] = [
      { id: '1', name: 'Главная', route: '/' },
      { id: '2', name: 'О нас', route: '/about' },
      { id: '3', name: 'Контакты', route: '/contacts' },
      { id: '4', name: 'Пользователи', route: '/users' },
      { id: '5', name: 'Пользователь 1', route: '/users/1' },
      { id: '6', name: 'Пользователь 2', route: '/users/2' },
      { id: '7', name: 'Пользователь 3', route: '/users/3' },
      { id: '8', name: 'Пользователь 4', route: '/users/4' },
    ];

    expect(getChildren(page, pages)).toStrictEqual([]);
  });
});
