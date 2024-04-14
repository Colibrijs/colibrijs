import path from 'node:path';
import type { EntryObject } from 'webpack';

import type { Settings } from '../types';

/** Возвращает входные точки для вебпака. Поле "main" из package.json будет входной точкой */
export function getEntryPoints(settings: Settings): EntryObject {
  return {
    main: path.join(settings.root, settings.packageJson.main),
  };
}
