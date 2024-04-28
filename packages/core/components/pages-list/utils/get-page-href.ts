import type { IPage } from '@colibrijs/types';

export function getPageHref(page: IPage): string {
  return `/pages/${page.id}`;
}
