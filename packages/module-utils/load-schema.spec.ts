import { textComponent, textComponentSchema } from '@colibrijs/mocks/components';
import { describe, expect, it } from '@jest/globals';

import fetchMock from 'fetch-mock';

import { getSchemaUrl } from './get-schema-url';
import { loadSchema } from './load-schema';

describe(loadSchema.name, () => {
  it('запрашивает схему компонента по ссылке, которую возвращает getSchemaUrl', async () => {
    expect.assertions(1);

    const expectedUrl = getSchemaUrl(textComponent);
    const getSchemaMock = fetchMock.getOnce('*', textComponentSchema);
    await loadSchema(textComponent);

    expect(getSchemaMock.called(expectedUrl)).toBe(true);
    fetchMock.reset();
  });

  it('возвращает схему пропсов компонента', async () => {
    expect.assertions(1);

    fetchMock.getOnce('*', textComponentSchema);
    const schema = await loadSchema(textComponent);

    // приходится использовать toEqual, потому что после JSON.parse порядок свойств в объекте меняется
    // eslint-disable-next-line jest/prefer-strict-equal -- описал выше
    expect(textComponentSchema).toEqual(schema);
    fetchMock.reset();
  });
});
