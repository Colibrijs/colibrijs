import { exampleElement } from '@colibrijs/mocks/elements';
import { expect, fn } from '@storybook/test';

import ElementRemoveStoriesMeta from './element-remove.stories';
import type { ElementRemoveMeta, ElementRemoveStory } from './element-remove.stories';

import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ElementRemoveTO } from '../test-object';

export default {
  ...ElementRemoveStoriesMeta,
  title: 'ElementRemove/tests/api',
} satisfies ElementRemoveMeta;

export const RequestParameters: ElementRemoveStory = {
  name: 'При подтверждении удаления, вызывается api.elements.delete с id элемента, переданного в пропсах',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          delete: fn().mockResolvedValue(exampleElement),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const { apiClient } = args;
    const elementRemove = new ElementRemoveTO({ canvasElement, step });

    await elementRemove.clickRemove();
    await elementRemove.confirm();

    await step('проверяю, что api.elements.delete был вызван с id элемента из пропсов', () =>
      expect(apiClient.elements.delete).toHaveBeenCalledWith(args.element.id)
    );
  },
};

export const RequestError: ElementRemoveStory = {
  name: 'Если при запросе возникла ошибка, появляется уведомление с информацией об ошибке',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          delete: () => Promise.reject(new Error('Случилось неладное')),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step }) => {
    step('Предусловие: api.elements.delete выбрасывает ошибку', () => {});
    const elementRemove = new ElementRemoveTO({ canvasElement, step });

    await elementRemove.clickRemove();
    await elementRemove.confirm();

    await step('проверяю, что появилось уведомление с текстом ошибки', async () => {
      const error = await elementRemove.getErrorMessage();
      await expect(error).toHaveTextContent('Случилось неладное');
    });
  },
};

export const RequestSuccess: ElementRemoveStory = {
  name: 'При успешном выполнении запроса, появляется сообщение о том что элемент успешно удален',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          delete: fn().mockResolvedValue(exampleElement),
        },
      });
    }),
  ],
  play: async ({ args, canvasElement, step }) => {
    const elementRemove = new ElementRemoveTO({ canvasElement, step });

    await elementRemove.clickRemove();
    await elementRemove.confirm();

    await step('проверяю, что появилось сообщение о том что элемент успешно удален', async () => {
      const success = await elementRemove.getSuccessMessage();
      const expectedMessage = `Элемент “${args.element.component.name}” успешно удален`;
      await expect(success).toHaveTextContent(expectedMessage);
    });
  },
};
