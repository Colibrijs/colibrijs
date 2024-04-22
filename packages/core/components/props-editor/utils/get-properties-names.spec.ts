import { describe, expect, it } from '@jest/globals';

import { getPropertiesNames } from './get-properties-names';
import schema from '../__stories__/schema.json';

describe('getPropertiesNames', () => {
  it('возвращает массив ключей-строк из свойства properties JSON-объекта переданного в параметр', () => {
    expect.assertions(1);
    const jsonSchema = JSON.stringify(schema, null, 2);
    const keys = getPropertiesNames(jsonSchema);

    expect(keys).toStrictEqual(['name', 'surname']);
  });
});
