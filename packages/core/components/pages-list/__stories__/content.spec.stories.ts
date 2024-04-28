import { examplePage } from '@colibrijs/mocks/pages';
import { expect } from '@storybook/test';

import PagesListStoriesMeta from './pages-list.stories';
import type { PagesListMeta, Story } from './pages-list.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { PagesListTO } from '../test-object';
import { getPageHref, getTitle } from '../utils';

export default {
  ...PagesListStoriesMeta,
  title: 'PagesList/tests/content',
} satisfies PagesListMeta;

export const TitleText: Story = {
  name: 'В названии страницы, отображается результат выполнения функции getTitle',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          get: () => Promise.resolve([examplePage]),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    const pagesList = new PagesListTO({ rootElement: canvasElement, step });
    const titleElement = await pagesList.findTitleElement(examplePage.id);
    const expectedTitle = getTitle(examplePage, { wrapTitle: (title) => title });

    expect(titleElement).toHaveTextContent(expectedTitle);
  },
};

export const TitleHref: Story = {
  name: 'Ссылка названия страницы является результатом выполнения getPageHref',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          get: () => Promise.resolve([examplePage]),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    const pagesList = new PagesListTO({ rootElement: canvasElement, step });
    const titleElement = await pagesList.findTitleElement(examplePage.id);

    expect(titleElement).toHaveAttribute('href', getPageHref(examplePage));
  },
};
