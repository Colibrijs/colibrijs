import { buildComponentSchema } from './build-component-schema';
import type { Settings } from '../types';

export async function buildSchemas(settings: Settings): Promise<void> {
  await Promise.all(
    Object.keys(settings.packageJson.exports).map((moduleName) =>
      buildComponentSchema(moduleName, settings)
    )
  );
}
