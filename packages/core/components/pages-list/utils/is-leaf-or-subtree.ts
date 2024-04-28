import type { IPage } from '@colibrijs/types';

/** Является ли страница листом дерева или поддеревом */
export function isLeafOrSubtree(page: IPage, pages: IPage[]): boolean {
  if (page.route === '/') return true;

  return !pages.some(
    (subPage) => subPage !== page && subPage.route !== '/' && page.route.startsWith(subPage.route)
  );
}
