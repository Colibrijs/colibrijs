import type { ImportRemoteOptions } from './types';

/**
 * Возвращает базовый URL компонента. Отсюда можно брать серверный и клиентский js, css и другое
 */
export function getBaseUrl(options: ImportRemoteOptions): string {
  const { componentName, libraryName, src } = options;
  const srcWithTrailingSlash = src.endsWith('/') ? src : `${src}/`;

  return `${srcWithTrailingSlash}${libraryName}/${componentName}`;
}
