import type { ImportRemoteOptions } from './types';

export function getBaseUrl(options: ImportRemoteOptions): string {
  return `${options.src}/${options.libraryName}/${options.componentName}`;
}
