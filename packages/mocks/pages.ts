import type { IPage, IPageConstructorOptions } from '@colibrijs/types';

export const examplePageConstructorOptions: IPageConstructorOptions = {
  route: '/example',
};

export const examplePage: IPage = {
  ...examplePageConstructorOptions,
  id: '1',
};
