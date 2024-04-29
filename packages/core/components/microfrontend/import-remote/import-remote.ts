import { encodePackageName, getBaseUrl } from '@colibrijs/module-utils';
import type { IComponent } from '@colibrijs/types';
import { importRemote as importRemoteCsr } from '@module-federation/utilities';

import { importRemoteSsr } from './import-remote-ssr';

export function importRemote<T>(component: IComponent): Promise<T> {
  const ssr = typeof window === 'undefined';

  if (ssr) {
    return importRemoteSsr({
      url: getBaseUrl(component),
      scope: encodePackageName(component.libraryName),
      module: './component/',
      remoteEntryFileName: 'remote.server.js',
    });
  }

  return importRemoteCsr<T>({
    url: getBaseUrl(component),
    scope: encodePackageName(component.libraryName),
    module: './component/',
    remoteEntryFileName: 'remote.client.js',
  });
}
