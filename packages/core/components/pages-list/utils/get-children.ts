import type { IPage } from '@colibrijs/types';

/** Возвращает потомков указанной страницы */
export function getChildren(page: IPage, pages: IPage[]): IPage[] {
  if (page.route === '/') {
    return [];
  }

  return pages.filter((subPage) => page !== subPage && subPage.route.startsWith(page.route));
}
