import { describe, expect, it } from '@jest/globals';

import { getDefaultValues } from './get-default-values';
import type { JsonSchema, SchemaValues } from '../types';

const schema: JsonSchema<Record<string, SchemaValues>> = {
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

describe('getDefaultValues', () => {
  it('возвращает объект со значениями по умолчанию из свойства properties JSON-объекта переданного в параметр', () => {
    expect.assertions(1);
    const defaultValues = getDefaultValues(schema);

    expect(defaultValues).toStrictEqual({ name: '', age: 0, isBald: false });
  });
});
