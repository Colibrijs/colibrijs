import { examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import { expect } from '@storybook/test';

import PagesListStoriesMeta from './pages-list.stories';
import type { PagesListMeta, Story } from './pages-list.stories';
import { PageAddTO } from '../../page-add/test-object';
import { PageAddModalTO } from '../../page-add-modal/test-object';
import { PagesListTO } from '../test-object';

export default {
  ...PagesListStoriesMeta,
  title: 'PagesList/tests/integration-page-add',
} satisfies PagesListMeta;

export const IntegrationPageAdd: Story = {
  name: 'При добавлении новой страницы, окно добавления закрывается',
  play: async ({ canvasElement, step }) => {
    const pagesList = new PagesListTO({ rootElement: canvasElement, step });
    await pagesList.clickAdd();

    const pageAddModal = new PageAddModalTO({ step });
    const pageAddRoot = await pageAddModal.waitForContent();
    const pageAdd = new PageAddTO({ rootElement: pageAddRoot, step });

    await step(
      'Убеждаюсь что после клика на кнопку добавления страницы, модальное окно отображается',
      () => expect(pageAddRoot).toBeVisible()
    );

    await pageAdd.fillRoute(examplePageConstructorOptions.route);
    await pageAdd.submit();
    // Нужно подождать некоторое время, прежде чем модалка с добавлением страницы пропадёт
    await new Promise((resolve) => setTimeout(resolve, 500));

    await step('Убеждаюсь, что после добавления страницы, окно уже не отображается', () =>
      expect(pageAddRoot).not.toBeVisible()
    );
  },
};
