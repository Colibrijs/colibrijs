import { exampleComponent } from '@colibrijs/mocks/components';
import { expect, fn, screen, userEvent, within } from '@storybook/test';

import ComponentsRemoveStoriesMeta from './components-remove.stories';
import type { ComponentsRemoveMeta, Story } from './components-remove.stories';

import { withMockedApi } from '../../../hooks/use-api/mocked';

export default {
  ...ComponentsRemoveStoriesMeta,
  title: 'ComponentsRemove/tests/api',
} satisfies ComponentsRemoveMeta;

export const RequestParameters: Story = {
  name: 'При подтверждении удаления, вызывается api.components.delete с id компонента, переданного в пропсах',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          delete: fn().mockResolvedValue(exampleComponent),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const { apiClient } = args;
    const story = within(canvasElement);
    const remove = story.getByTestId('components-remove__remove');

    await step('кликаю на кнопку "Удалить"', () => userEvent.click(remove));
    await step('подтверждаю удаление', async () => {
      // screen, а не story, потому что попап в портале рендерится
      const confirm = await screen.findByTestId('components-remove__confirm');
      await userEvent.click(confirm);
    });

    await step('проверяю, что api.components.delete был вызван с id компонента в пропсах', () =>
      expect(apiClient.components.delete).toHaveBeenCalledWith(args.component.id)
    );
  },
};

export const RequestError: Story = {
  name: 'Если при запросе возникла ошибка, появляется уведомление с информацией об ошибке',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          delete: () => Promise.reject(new Error('Случилось неладное')),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    step('Предусловие: api.components.delete выбрасывает ошибку', () => {});

    const story = within(canvasElement);
    const remove = story.getByTestId('components-remove__remove');

    await step('кликаю на кнопку "Удалить"', () => userEvent.click(remove));
    await step('подтверждаю удаление', async () => {
      // screen, а не story, потому что попап в портале рендерится
      const confirm = await screen.findByTestId('components-remove__confirm');
      await userEvent.click(confirm);
    });

    await step('проверяю, что появилось уведомление с текстом ошибки', async () => {
      // screen, а не story, потому что ошибка в портале рендерится
      const error = await screen.findByTestId('components-remove__error');
      await expect(error).toHaveTextContent('Случилось неладное');
    });
  },
};

export const RequestSuccess: Story = {
  name: 'При успешном выполнении запроса, появляется сообщение о том что компонент успешно удалён',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          delete: () => Promise.resolve(exampleComponent),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const story = within(canvasElement);
    const remove = story.getByTestId('components-remove__remove');

    await step('кликаю на кнопку "Удалить"', () => userEvent.click(remove));
    await step('подтверждаю удаление', async () => {
      // screen, а не story, потому что попап в портале рендерится
      const confirm = await screen.findByTestId('components-remove__confirm');
      await userEvent.click(confirm);
    });

    await step('проверяю, что появилось сообщение о том что компонент успешно удалён', async () => {
      // screen, а не story, потому что ошибка в портале рендерится
      const success = await screen.findByTestId('components-remove__success');
      await expect(success).toHaveTextContent(`Компонент “${args.component.name}” успешно удалён`);
    });
  },
};
