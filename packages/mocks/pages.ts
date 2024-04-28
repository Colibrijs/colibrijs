import type { IPage, IPageConstructorOptions } from '@colibrijs/types';

export const examplePageConstructorOptions: IPageConstructorOptions = {
  route: '/example',
};

export const examplePage: IPage = {
  ...examplePageConstructorOptions,
  id: '1',
};

export const manyPages: IPage[] = [
  { id: '1', route: '/' },
  { id: '2', route: '/about' },
  { id: '3', route: '/contacts' },
  { id: '4', route: '/users' },
  { id: '5', route: '/users/1' },
  { id: '6', route: '/users/2' },
  { id: '7', route: '/users/3' },
  { id: '8', route: '/users/4' },
  { id: '9', route: '/users/4/about' },
];
