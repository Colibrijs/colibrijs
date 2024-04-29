import { exampleComponent } from '@colibrijs/mocks/components';
import { getComponentSchemaUrl } from '@colibrijs/module-utils';
import { expect, within } from '@storybook/test';

import ComponentsListStoriesMeta from './components-list.stories';
import type { ComponentsListMeta, Story } from './components-list.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';

export default {
  ...ComponentsListStoriesMeta,
  title: 'ComponentsList/tests/api',
} satisfies ComponentsListMeta;

export const ResponseData: Story = {
  name: 'В таблице отображаются компоненты из ответа api.components.get',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([exampleComponent]),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    const story = within(canvasElement);
    const componentRow = await story.findByTestId(`components-list__${exampleComponent.id}`);
    // Ниже приходится использовать querySelector, потому что переопределять данные в таблице очень геморно

    await step('Проверяю, что в первом столбике отображается имя компонента', async () => {
      const firstColumn = componentRow.querySelector('.ant-table-cell:nth-child(1)');
      await expect(firstColumn).toHaveTextContent(exampleComponent.name);
    });

    await step('Проверяю, что в во втором столбике отображается название библиотеки', async () => {
      const secondColumn = componentRow.querySelector('.ant-table-cell:nth-child(2)');
      await expect(secondColumn).toHaveTextContent(exampleComponent.libraryName);
    });

    await step('Проверяю, что в третьем столбике отображается ссылка на схему', async () => {
      const thirdColumn = componentRow.querySelector('.ant-table-cell:nth-child(3)');
      const schemaUrl = getComponentSchemaUrl(exampleComponent);
      await expect(thirdColumn).toHaveTextContent(schemaUrl);
    });
  },
};
