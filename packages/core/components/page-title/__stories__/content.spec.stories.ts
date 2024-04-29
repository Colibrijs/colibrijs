import { examplePage } from '@colibrijs/mocks/pages';
import { expect } from '@storybook/test';

import PageTitleStoriesMeta, { type PageTitleMeta, type Story } from './page-title.stories';
import { PageTitleTO } from '../test-object';

export default {
  ...PageTitleStoriesMeta,
  title: 'PageTitle/tests/content',
} satisfies PageTitleMeta;

export const TitleText: Story = {
  name: 'В заголовке отображается значение поля name пропса page',
  args: { page: examplePage },
  play: async ({ canvasElement, step }) => {
    const pageTitle = new PageTitleTO({ rootElement: canvasElement });
    const nameElement = pageTitle.getName();

    await step('Проверяю, что заголовок страницы равен значению поля name', () =>
      expect(nameElement).toHaveTextContent(examplePage.name)
    );
  },
};

export const SubtitleText: Story = {
  name: 'В подзаголовке отображается значение поля route пропса page',
  args: { page: examplePage },
  play: async ({ canvasElement, step }) => {
    const pageTitle = new PageTitleTO({ rootElement: canvasElement });
    const routeElement = pageTitle.getRoute();

    await step('Проверяю, что заголовок страницы равен значению поля route', () =>
      expect(routeElement).toHaveTextContent(examplePage.route)
    );
  },
};
