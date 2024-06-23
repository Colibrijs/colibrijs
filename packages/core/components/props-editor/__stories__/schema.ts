import type { JsonSchema } from '@colibrijs/schema';

export const schema: JsonSchema<Record<string, string>> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'user',
  title: 'User',
  type: 'object',
  properties: {
    name: {
      description: 'Your name',
      type: 'string',
    },
    surname: {
      description: 'Your surname',
      type: 'string',
    },
  },
};
