import { describe, expect, it } from '@jest/globals';

import { getDefaultValues } from './get-default-values';
import type { JsonSchema, ObjectProperty } from '../types';

const schema: JsonSchema<object> = {
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

    const stringExample: ObjectProperty<object> = {
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
    const numberExample: ObjectProperty<object> = {
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
    const booleanExample: ObjectProperty<object> = {
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

  it('возвращает объект с вложенными объектами, если таковые переданы в properties схемы', () => {
    expect.assertions(1);
    const objExample: ObjectProperty<object> = {
      ...schema,
      properties: {
        age: {
          description: 'Your age',
          type: 'number' as const,
        },
        nestedObj: {
          description: 'obj',
          type: 'object' as const,
          properties: {
            isBald: {
              description: 'Your hair availability',
              type: 'boolean' as const,
            },
          },
        },
      },
    };

    const defaultValues = getDefaultValues(objExample);

    expect(defaultValues).toStrictEqual({
      age: 0,
      nestedObj: {
        isBald: false,
      },
    });
  });
});
