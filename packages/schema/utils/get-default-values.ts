import type { JsonSchema, Property, SchemaValues } from '../types';

export function getDefaultValues<T extends Record<string, SchemaValues>>(schema: JsonSchema<T>): T {
  const defaultValues = getPropertiesValues(schema.properties);
  return defaultValues as T;
}

function getPropertiesValues<T extends Record<string, Property<SchemaValues>>>(
  properties: T
): Record<string, SchemaValues> {
  const keys = Object.keys(properties);
  return keys.reduce(
    (obj, key) => {
      if (properties[key]?.type === 'number') obj[key] = 0;
      if (properties[key]?.type === 'string') obj[key] = '';
      if (properties[key]?.type === 'boolean') obj[key] = false;
      if (properties[key]?.type === 'object')
        obj[key] = getPropertiesValues(
          properties[key].properties as Record<string, Property<object>>
        );
      return obj;
    },
    {} as Record<string, SchemaValues>
  );
}
