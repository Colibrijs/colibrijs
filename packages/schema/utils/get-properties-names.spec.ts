import { describe, expect, it } from '@jest/globals';

import { getPropertiesNames } from './get-properties-names';
import type { JsonSchema } from '../types';

const schema: JsonSchema<Record<string, string>> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'user',
  title: 'User',
  type: 'object',
  description: 'schema',
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

describe('getPropertiesNames', () => {
  it('возвращает массив ключей-строк из свойства properties JSON-объекта переданного в параметр', () => {
    expect.assertions(1);
    const keys = getPropertiesNames(schema);

    expect(keys).toStrictEqual(['name', 'surname']);
  });
});
