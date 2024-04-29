import { exampleComponent } from '@colibrijs/mocks/components';
import { describe, expect, it, jest } from '@jest/globals';

import * as getBaseUrlModule from './get-base-url';
import { getCssUrl } from './get-css-url';

describe(getCssUrl.name, () => {
  it('возвращает ссылку на css компонента - результат объединения baseUrl и /component.css', () => {
    expect.assertions(1);
    jest.spyOn(getBaseUrlModule, 'getBaseUrl').mockReturnValueOnce('baseUrl');

    expect(getCssUrl(exampleComponent)).toBe('baseUrl/component.css');
  });
});
