import type { IPage, IPageConstructorOptions } from '@colibrijs/types';

export const examplePageConstructorOptions: IPageConstructorOptions = {
  name: 'Пример страницы',
  route: '/example',
};

export const examplePage: IPage = {
  ...examplePageConstructorOptions,
  id: '1',
};

export const manyPages: IPage[] = [
  { id: '1', name: 'Главная', route: '/' },
  { id: '2', name: 'О нас', route: '/about' },
  { id: '3', name: 'Контакты', route: '/contacts' },
  { id: '4', name: 'Пользователи', route: '/users' },
  { id: '5', name: 'Пользователь 1', route: '/users/1' },
  { id: '6', name: 'Пользователь 2', route: '/users/2' },
  { id: '7', name: 'Пользователь 3', route: '/users/3' },
  { id: '8', name: 'Пользователь 4', route: '/users/4' },
  { id: '9', name: 'О пользователе 4', route: '/users/4/about' },
];
