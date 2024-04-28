import { examplePageConstructorOptions, examplePage } from '@colibrijs/mocks/pages';
import { expect, fn } from '@storybook/test';

import PageAddStoriesMeta from './page-add.stories';
import type { PageAddMeta, Story } from './page-add.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { PageAddTO } from '../test-object';

export default {
  ...PageAddStoriesMeta,
  title: 'PageAdd/tests/api',
} satisfies PageAddMeta;

export const RequestParameters: Story = {
  name: 'При клике на кнопку "Добавить", вызывается api.pages.post с данными, которые ввёл пользователь',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          post: fn().mockResolvedValue(examplePage),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const pageAdd = new PageAddTO({ canvasElement, step });

    await pageAdd.fillRoute(examplePageConstructorOptions.route);
    await pageAdd.submit();

    await step('Проверяю, что api.pages.post вызвался с введёнными данными', () => {
      expect(args.apiClient.pages.post).toHaveBeenCalledWith({
        route: examplePageConstructorOptions.route,
      });
    });
  },
};

export const RequestError: Story = {
  name: 'Если при отправке данных возникла ошибка, текст ошибки отображается в уведомлении',
  args: { defaultValues: examplePageConstructorOptions },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          post: () => Promise.reject(new Error('Случилось неладное!')),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    await step('Предусловие: поля формы заполнены моковыми значениями', () => {});
    const pageAdd = new PageAddTO({ canvasElement, step });

    await step('Проверяю, что изначально ошибки нет', async () => {
      const error = await pageAdd.getError({ strict: false });
      await expect(error).toBeNull();
    });

    await pageAdd.submit();

    await step('Проверяю, что появилась ошибка "Случилось неладное!"', async () => {
      const error = await pageAdd.getError({ strict: true });
      await expect(error).toBeVisible();
      await expect(error).toHaveTextContent('Случилось неладное!');
    });
  },
};
