import fs from 'node:fs/promises';
import path from 'node:path';

import { getExportOutputDirectory } from './get-export-output-directory';
import type { Settings } from '../types';

export async function buildComponentSchema(moduleName: string, settings: Settings) {
  const modulePath = settings.packageJson.exports[moduleName];

  if (typeof modulePath !== 'string') {
    throw new Error(`"${moduleName}" должен быть в package.json exports`);
  }

  const fullComponentPath = path.resolve(settings.root, modulePath);
  const inputSchemaPath = path.resolve(path.dirname(fullComponentPath), './schema');

  const { schema }: { schema: string } = await import(inputSchemaPath);
  const moduleDirectory = getExportOutputDirectory(moduleName, settings.packageJson);
  const outputSchemaPath = path.join(settings.root, './dist/', moduleDirectory, './schema.json');

  await fs.writeFile(outputSchemaPath, schema, 'utf8');
}
