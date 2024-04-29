import { encodePackageName } from '@colibrijs/module-utils';
import type { IComponent } from '@colibrijs/types';
import { importRemote as importRemoteCsr } from '@module-federation/utilities';

import { getBaseUrl } from './get-base-url';
import { importRemoteSsr } from './import-remote-ssr';

export function importRemote<T>(component: IComponent): Promise<T> {
  const fullUrl = getBaseUrl(component);
  const ssr = typeof window === 'undefined';

  if (ssr) {
    return importRemoteSsr({
      url: fullUrl,
      scope: encodePackageName(component.libraryName),
      module: './component/',
      remoteEntryFileName: 'remote.server.js',
    });
  }

  return importRemoteCsr<T>({
    url: fullUrl,
    scope: encodePackageName(component.libraryName),
    module: './component/',
    remoteEntryFileName: 'remote.client.js',
  });
}
