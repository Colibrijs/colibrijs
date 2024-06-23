import { describe, expect, it } from '@jest/globals';

import { getPropertiesNames } from './get-properties-names';
import { schema } from '../__stories__/schema';

describe('getPropertiesNames', () => {
  it('возвращает массив ключей-строк из свойства properties JSON-объекта переданного в параметр', () => {
    expect.assertions(1);
    const keys = getPropertiesNames(schema);

    expect(keys).toStrictEqual(['name', 'surname']);
  });
});
