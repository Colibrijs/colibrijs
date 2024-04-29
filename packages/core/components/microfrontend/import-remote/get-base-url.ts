import type { IComponent } from '@colibrijs/types';

/**
 * Возвращает базовый URL компонента. Отсюда можно брать серверный и клиентский js, css и другое
 */
export function getBaseUrl(component: IComponent): string {
  const { componentName, libraryName, src } = component;
  const srcWithTrailingSlash = src.endsWith('/') ? src : `${src}/`;

  return `${srcWithTrailingSlash}${libraryName}/${componentName}`;
}
