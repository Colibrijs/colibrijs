import { examplePage } from '@colibrijs/mocks/pages';
import { describe, expect, it } from '@jest/globals';

import { getPageHref } from '../get-page-href';

describe(getPageHref.name, () => {
  it('возвращает ссылку на страницу редакцтирования страницы "/pages/#{page.id}"', () => {
    expect.assertions(1);
    const href = getPageHref({ ...examplePage, id: '12345' });
    expect(href).toBe('/pages/12345');
  });
});
