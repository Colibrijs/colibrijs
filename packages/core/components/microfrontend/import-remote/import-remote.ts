import { encodePackageName } from '@colibrijs/module-utils';
import { importRemote as importRemoteCsr } from '@module-federation/utilities';

import { getBaseUrl } from './get-base-url';
import { importRemoteSsr } from './import-remote-ssr';
import type { ImportRemoteOptions } from './types';

export function importRemote<T>(options: ImportRemoteOptions): Promise<T> {
  const fullUrl = getBaseUrl(options);

  if (options.ssr) {
    return importRemoteSsr({
      url: fullUrl,
      scope: encodePackageName(options.libraryName),
      module: './component/',
      remoteEntryFileName: 'remote.server.js',
    });
  }

  return importRemoteCsr<T>({
    url: fullUrl,
    scope: encodePackageName(options.libraryName),
    module: './component/',
    remoteEntryFileName: 'remote.client.js',
  });
}
