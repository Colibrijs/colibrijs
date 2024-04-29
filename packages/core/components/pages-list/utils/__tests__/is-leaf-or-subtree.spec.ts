import type { IPage } from '@colibrijs/types';
import { describe, expect, it } from '@jest/globals';

import { isLeafOrSubtree } from '../is-leaf-or-subtree';

describe(isLeafOrSubtree.name, () => {
  it('возвращает true если у страницы нет потомков', () => {
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

    expect(isLeafOrSubtree(pages[2]!, pages)).toBe(true);
  });

  it('возвращает true если страница является директорией для подстраниц', () => {
    expect.assertions(1);

    const pages: IPage[] = [
      { id: '3', name: 'Контакты', route: '/contacts' }, // 0 - нет потомков
      { id: '4', name: 'Пользователи', route: '/users' }, // 1 - есть потомки директория
      { id: '5', name: 'Пользователь 1', route: '/users/1' }, // 2 - потомок
    ];

    expect(isLeafOrSubtree(pages[1]!, pages)).toBe(true);
  });

  it('возвращает false если страница является потомком одной из страниц', () => {
    expect.assertions(1);

    const pages: IPage[] = [
      { id: '3', name: 'Контакты', route: '/contacts' }, // 0 - нет потомков
      { id: '4', name: 'Пользователи', route: '/users' }, // 1 - есть потомки директория
      { id: '5', name: 'Пользователь 1', route: '/users/1' }, // 2 - потомок
    ];

    expect(isLeafOrSubtree(pages[2]!, pages)).toBe(false);
  });

  it('для главной страницы всегда возвращает true', () => {
    expect.assertions(1);

    const pages: IPage[] = [
      { id: '1', name: 'Главная', route: '/' },
      { id: '2', name: 'О нас', route: '/about' },
    ];

    expect(isLeafOrSubtree(pages[0]!, pages)).toBe(true);
  });
});
