import type { IPage } from '@colibrijs/types';

export interface Options<T> {
  wrapTitle: (title: string, page: IPage) => T;
}

export function getTitle<T>(page: IPage, options: Options<T>): T {
  const { wrapTitle } = options;
  const titleRaw = page.route === '/' ? '/' : page.route.slice(page.route.lastIndexOf('/') + 1);

  return wrapTitle(titleRaw, page);
}
