import type { JsonSchema, SchemaValues } from '../types';

export function getDefaultValues<T extends Record<string, SchemaValues>>(schema: JsonSchema<T>): T {
  const keys = Object.keys(schema.properties);
  const defaultValues = keys.reduce((obj: Record<string, SchemaValues>, key: string) => {
    if (schema.properties[key]?.type === 'number') obj[key] = 0;
    if (schema.properties[key]?.type === 'string') obj[key] = '';
    if (schema.properties[key]?.type === 'boolean') obj[key] = false;
    return obj;
  }, {});
  return defaultValues as T;
}
