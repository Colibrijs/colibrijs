import type { SchemaValues } from '@colibrijs/schema';

import type { JsonSchema } from '../types';

export function getPropertiesNames<T extends Record<string, SchemaValues>>(
  jsonSchema: JsonSchema<T>
): string[] {
  return Object.keys(jsonSchema.properties);
}
