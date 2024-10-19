import { textElement } from '@colibrijs/mocks/elements';
import { expect, fn } from '@storybook/test';

import ElementAddStoriesMeta from './element-editor.stories';
import type { ElementEditorMeta, ElementEditorStory } from './element-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ElementEditorTO } from '../test-object';

export default {
  ...ElementAddStoriesMeta,
  title: 'ElementEditor/tests/Common',
} satisfies ElementEditorMeta;

export const OpenProp: ElementEditorStory = {
  name: 'Кнопка-галчонок появляется в случае, если изначальные пропсы отличаются от редактированных',
  args: { open: true, element: textElement },
  play: async ({ canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    const propsEditor = await elementEditor.getPropsEditorTO();

    expect(
      elementEditor.isSaveButtonVisible(),
      'Убеждаюсь, что изначально кнопки сохранения нет'
    ).toBe(false);

    await propsEditor.fill('text', 'Некий заголовок');

    expect(
      elementEditor.isSaveButtonVisible(),
      'Убеждаюсь, что теперь кнопка сохранения активна'
    ).toBe(true);
  },
};

export const SuccessRequest: ElementEditorStory = {
  name: 'Клик по галчонку, в положительном исходе делает запрос на api.elements.patch с идом элемента и новыми пропсами',
  args: { open: true, element: textElement },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          patch: fn(),
        },
      });
    }),
  ],
  play: async ({ canvasElement, step, args }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    const propsEditor = await elementEditor.getPropsEditorTO();

    await propsEditor.fill('text', 'Заголовок1');
    await elementEditor.clickSave();

    expect(args.apiClient.elements.patch).toHaveBeenCalledWith(args.element.id, {
      text: 'Заголовок1',
    });
  },
};

export const FailRequest: ElementEditorStory = {
  name: 'Клик по кнопке "сохранить" в случае ошибки выдаст попап с текстом ошибки',
  args: { open: true, element: textElement },
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
  play: async ({ canvasElement, step }) => {
    const elementEditor = new ElementEditorTO({ canvasElement, step });
    const propsEditor = await elementEditor.getPropsEditorTO();

    await propsEditor.fill('text', 'Заголовок1');
    await elementEditor.clickSave();
    const errorMessage = elementEditor.getErrorMessage();

    expect(
      errorMessage,
      'Проверяем что текст ошибки в уведомлении совпадает с тектом ошибки апишки'
    ).toBe('Заплати за интернет, олух!');
  },
};
