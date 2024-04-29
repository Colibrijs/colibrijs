import { exampleComponent } from '@colibrijs/mocks/components';
import { describe, expect, it, jest } from '@jest/globals';

import * as getBaseUrlModule from './get-base-url';
import { getSchemaUrl } from './get-schema-url';

describe(getSchemaUrl.name, () => {
  it('возвращает ссылку на css компонента - результат объединения baseUrl и /schema.json', () => {
    expect.assertions(1);
    jest.spyOn(getBaseUrlModule, 'getBaseUrl').mockReturnValueOnce('baseUrl');

    expect(getSchemaUrl(exampleComponent)).toBe('baseUrl/schema.json');
  });
});
