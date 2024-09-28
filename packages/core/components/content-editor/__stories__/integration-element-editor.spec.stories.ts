import { exampleElement } from '@colibrijs/mocks/elements';
import { expect } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorTO } from '../test-object';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/integration-element-editor',
} satisfies StoryMeta;

export const HiddenByDefault: Story = {
  name: 'Редактор элемента спрятан по умолчанию',
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    const editor = await contentEditor.getEditorDrawerElement();

    expect(editor, 'Убеждаюсь, что редактор скрыт по умолчанию').toBeNull();
  },
};

export const VisibleOnSelect: Story = {
  name: 'При выборе элемента в дереве, открывается редактор этого элемента',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          get: () => Promise.resolve([exampleElement]),
        },
      });
    }),
  ],
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    await contentEditor.selectElement(exampleElement.id);
    const editor = await contentEditor.getEditorDrawerElement();

    expect(editor, 'Убеждаюсь, что редактор отображается').toBeVisible();
  },
};

export const Title: Story = {
  name: 'В хедере редактора пропсов выводится название компонента',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          get: () => Promise.resolve([exampleElement]),
        },
      });
    }),
  ],
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    await contentEditor.selectElement(exampleElement.id);
    const editorTitle = await contentEditor.getEditorDrawerTitle();

    expect(editorTitle).toHaveTextContent(exampleElement.component.name);
  },
};
