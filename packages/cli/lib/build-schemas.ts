import type { MicrofrontendMeta } from '@colibrijs/types';
import fs from 'node:fs/promises';
import path from 'node:path';

import { getFederationPluginOptions } from '../config/plugins/get-federation-plugin-options';
import type { Settings } from '../types';

export async function buildSchemas(settings: Settings): Promise<void> {
  await Promise.all(
    Object.keys(settings.packageJson.exports).map((moduleName) =>
      buildComponentSchema(moduleName, settings)
    )
  );
}

export async function buildComponentSchema(componentName: string, settings: Settings) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- там точно есть componentName
  const modulePath = settings.packageJson.exports[componentName]!;
  const fullComponentPath = path.resolve(settings.root, modulePath);
  const inputSchemaPath = path.resolve(path.dirname(fullComponentPath), './schema');

  const { schema }: MicrofrontendMeta<unknown> = await import(inputSchemaPath);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- там точно есть filename
  const filename = getFederationPluginOptions(settings, componentName).filename!;
  const outputSchemaPath = path.join(
    settings.root,
    './dist/',
    path.dirname(filename),
    './schema.json'
  );

  await fs.writeFile(outputSchemaPath, schema, 'utf8');
}
