import type { JsonSchema } from '@colibrijs/types';

export function getPropertiesNames<T extends Record<string, string>>(
  jsonSchema: JsonSchema<T>
): Array<keyof T> {
  const schema = JSON.parse(jsonSchema);
  const keys = Object.keys(schema.properties);
  return keys as Array<keyof T>;
}
