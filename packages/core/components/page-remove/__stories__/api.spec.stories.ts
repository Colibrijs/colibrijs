import { examplePage } from '@colibrijs/mocks/pages';
import { expect, fn } from '@storybook/test';

import PageRemoveStoriesMeta from './page-remove.stories';
import type { PageRemoveMeta, Story } from './page-remove.stories';

import { withMockedApi } from '../../../hooks/use-api/mocked';
import { PageRemoveTO } from '../test-object';

export default {
  ...PageRemoveStoriesMeta,
  title: 'PageRemove/tests/api',
} satisfies PageRemoveMeta;

export const RequestParameters: Story = {
  name: 'При подтверждении удаления, вызывается api.pages.delete с id страницы, переданной в пропсах',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          delete: fn().mockResolvedValue(examplePage),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const { apiClient } = args;
    const pageRemove = new PageRemoveTO({ canvasElement, step });

    await pageRemove.clickRemove();
    await pageRemove.confirm();

    await step('проверяю, что api.pages.delete был вызван с id страницы из пропсов', () =>
      expect(apiClient.pages.delete).toHaveBeenCalledWith(args.page.id)
    );
  },
};

export const RequestError: Story = {
  name: 'Если при запросе возникла ошибка, появляется уведомление с информацией об ошибке',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          delete: () => Promise.reject(new Error('Случилось неладное')),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    step('Предусловие: api.pages.delete выбрасывает ошибку', () => {});
    const pageRemove = new PageRemoveTO({ canvasElement, step });

    await pageRemove.clickRemove();
    await pageRemove.confirm();

    await step('проверяю, что появилось уведомление с текстом ошибки', async () => {
      const error = await pageRemove.getErrorMessage();
      await expect(error).toHaveTextContent('Случилось неладное');
    });
  },
};

export const RequestSuccess: Story = {
  name: 'При успешном выполнении запроса, появляется сообщение о том что страница успешно удалена',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        pages: {
          delete: () => Promise.resolve(examplePage),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const pageRemove = new PageRemoveTO({ canvasElement, step });

    await pageRemove.clickRemove();
    await pageRemove.confirm();

    await step('проверяю, что появилось сообщение о том что страница успешно удалена', async () => {
      const success = await pageRemove.getSuccessMessage();
      const expectedMessage = `Страница “${args.page.name}” (${args.page.route}) успешно удалена`;
      await expect(success).toHaveTextContent(expectedMessage);
    });
  },
};
