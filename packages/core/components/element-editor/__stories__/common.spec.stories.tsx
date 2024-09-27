import { exampleElement } from '@colibrijs/mocks/elements';
import { expect, fn, screen, userEvent, fireEvent } from '@storybook/test';

import ElementAddStoriesMeta from './element-editor.stories';
import type { ElementEditorMeta, ElementEditorStory } from './element-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementEditor/tests/Common',
} satisfies ElementEditorMeta;

export const OpenProp: ElementEditorStory = {
  name: 'Кнопка-галчонок появляется в случае, если изначальные пропсы отличаются от редактированных',
  args: { open: true, element: exampleElement },
  play: async ({ step }) => {
    const textarea = screen.getByTestId('element-editor__textarea');

    step('Убедимся, что изначально галчонка нет', () => {
      const saveButton = screen.queryByTestId('element-editor__save');
      expect(saveButton).toBeNull();
    });

    step('Введем что-либо в текстарею', () => {
      fireEvent.input(textarea, { target: { value: '{\n "title": "Заголовок1"\n}' } });
    });

    const saveButton = screen.getByTestId('element-editor__save');
    expect(saveButton, 'Убедимся, что галчонок отныне виден').toBeVisible();
  },
};

export const SuccessRequest: ElementEditorStory = {
  name: 'Клик по галчонку, в положительном исходе делает запрос на api.elements.patch с идом элемента и новыми пропсами',
  args: { open: true, element: exampleElement },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          patch: fn(),
        },
      });
    }),
  ],
  play: async ({ step, args }) => {
    const textarea = screen.getByTestId('element-editor__textarea');

    step('Введем что-либо в текстарею', () => {
      fireEvent.input(textarea, { target: { value: '{\n "title": "Заголовок1"\n}' } });
    });

    await step('Сохраним изменения', async () => {
      const saveButton = screen.getByTestId('element-editor__save');
      await userEvent.click(saveButton);
    });

    expect(args.apiClient.elements.patch).toHaveBeenCalledWith(args.element.id, {
      title: 'Заголовок1',
    });
  },
};

export const FailRequest: ElementEditorStory = {
  name: 'Клик по галчонку в случае ошибки выдаст попап с текстом ошибки',
  args: { open: true, element: exampleElement },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          patch: fn(() => {
            throw new Error('Заплати за интернет, олух!');
          }),
        },
      });
    }),
  ],
  play: async ({ step }) => {
    const textarea = screen.getByTestId('element-editor__textarea');

    step('Введем что-либо в текстарею', () => {
      fireEvent.input(textarea, { target: { value: '{\n "title": "Заголовок1"\n}' } });
    });

    await step('Попытаемся сохранить изменения', async () => {
      const saveButton = screen.getByTestId('element-editor__save');
      await userEvent.click(saveButton);
    });

    const errorMessage = await screen.findByTestId('element-remove__error');
    expect(errorMessage, 'Получаем ошибку с унижениями').toHaveTextContent(
      'Заплати за интернет, олух!'
    );
  },
};
