import { exampleElement } from '@colibrijs/mocks/elements';
import { expect } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorTO } from '../test-object';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/integration-element-remove',
} satisfies StoryMeta;

export const HidesOnRemove: Story = {
  name: 'Когда элемент удаляется, интерфейс редактирования скрывается',
  decorators: [
    withMockedApi((api) => {
      api.override({
        elements: {
          delete: () => Promise.resolve(exampleElement),
          get: () => Promise.resolve([exampleElement]),
        },
      });
    }),
  ],
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    await contentEditor.selectElement(exampleElement.id);
    const elementRemove = contentEditor.getElementEditorTO().getElementRemoveTO();

    await elementRemove.clickRemove();
    await elementRemove.confirm();

    expect(
      await contentEditor.getElementEditorTO().isOpened(),
      'Проверяю что интерфейс редактирования элемента скрыт'
    ).toBe(false);
  },
};

export const RemovesOnRemove: Story = {
  name: 'Когда элемент удаляется, он удаляется из дерева',
  decorators: [
    withMockedApi((api) => {
      api.override({
        elements: {
          delete: () => Promise.resolve(exampleElement),
          get: () => Promise.resolve([exampleElement]),
        },
      });
    }),
  ],
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    await contentEditor.selectElement(exampleElement.id);
    const elementRemove = contentEditor.getElementEditorTO().getElementRemoveTO();

    expect(
      contentEditor.getElementsIds(),
      'Проверяю что изначально в дереве те элементы, которые вернула апишка'
    ).toStrictEqual([exampleElement.id]);

    await elementRemove.clickRemove();
    await elementRemove.confirm();

    expect(
      contentEditor.getElementsIds(),
      'Проверяю что в дереве нет ни одного элемента'
    ).toStrictEqual([]);
  },
};
