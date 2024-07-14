import { describe, expect, it } from '@jest/globals';

import { getDefaultValues } from './get-default-values';
import type { JsonSchema, SchemaValues } from '../types';

const schema: JsonSchema<Record<string, SchemaValues>> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'user',
  title: 'User',
  type: 'object',
  properties: {},
};

describe(getDefaultValues.name, () => {
  it('возвращает пустой объект если properties значение у схемы - пустой объект', () => {
    expect.assertions(1);
    const defaultValues = getDefaultValues(schema);

    expect(defaultValues).toStrictEqual({});
  });

  it('возвращает объект со значением у свойства в виде пустой строки, если type = "string"', () => {
    expect.assertions(1);

    const stringExample = {
      ...schema,
      properties: {
        name: {
          description: 'Your name',
          type: 'string' as const,
        },
      },
    };

    const defaultValues = getDefaultValues(stringExample);

    expect(defaultValues).toStrictEqual({ name: '' });
  });

  it('возвращает объект со значением 0 у свойства, если type = "number"', () => {
    expect.assertions(1);
    const numberExample = {
      ...schema,
      properties: {
        age: {
          description: 'Your age',
          type: 'number' as const,
        },
      },
    };

    const defaultValues = getDefaultValues(numberExample);

    expect(defaultValues).toStrictEqual({ age: 0 });
  });

  it('возвращает объект со значением false у свойства, если type = "boolean"', () => {
    expect.assertions(1);
    const booleanExample = {
      ...schema,
      properties: {
        isBald: {
          description: 'Your hair availability',
          type: 'boolean' as const,
        },
      },
    };

    const defaultValues = getDefaultValues(booleanExample);

    expect(defaultValues).toStrictEqual({ isBald: false });
  });
});
