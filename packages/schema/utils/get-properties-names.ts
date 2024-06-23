import type { JsonSchema } from '../types';

export function getPropertiesNames<T extends Record<string, string>>(
  jsonSchema: JsonSchema<T>
): string[] {
  return Object.keys(jsonSchema.properties);
}
