import { examplePage } from '@colibrijs/mocks/pages';
import { expect } from '@storybook/test';

import PageTitleStoriesMeta, { type PageTitleMeta, type Story } from './page-title.stories';
import { PageTitleTO } from '../test-object';

export default {
  ...PageTitleStoriesMeta,
  title: 'PageTitle/tests/content',
} satisfies PageTitleMeta;

export const TitleText: Story = {
  name: 'В заголовке отображается значение поля route пропса page',
  args: { page: examplePage },
  play: async ({ canvasElement, step }) => {
    const pageTitle = new PageTitleTO({ rootElement: canvasElement });
    const titleElement = pageTitle.getTitle();

    await step('Проверяю, что заголовок страницы равен значению поля route', () =>
      expect(titleElement).toHaveTextContent(examplePage.route)
    );
  },
};
