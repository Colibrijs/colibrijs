import type { JsonSchema, SchemaValues } from '@colibrijs/schema';

export const schema: JsonSchema<Record<string, SchemaValues>> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'user',
  title: 'User',
  type: 'object',
  properties: {
    name: {
      description: 'Your name',
      type: 'string',
    },
    age: {
      description: 'Your age',
      type: 'number',
    },
    isBald: {
      description: 'Your hair availability',
      type: 'boolean',
    },
  },
};
