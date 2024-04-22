import path from 'node:path';
import type { EntryObject } from 'webpack';

/** Возвращает входные точки для вебпака. Поле "main" из package.json будет входной точкой */
export function getEntryPoints(): EntryObject {
  return {
    main: path.resolve(__dirname, './fake-entry.ts'),
  };
}
