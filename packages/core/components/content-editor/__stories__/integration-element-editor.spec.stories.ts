import { exampleElement } from '@colibrijs/mocks/elements';
import { expect, fn } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
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

    expect(editor).toBeNull();
  },
};

export const VisibleOnSelect: Story = {
  name: 'При выборе элемента в дереве, открывается редактор этого элемента',
  args: {
    content: [exampleElement],
  },
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    await contentEditor.selectElement(exampleElement.id);
    const editor = await contentEditor.getEditorDrawerElement();

    expect(editor).toBeVisible();
  },
};

export const Title: Story = {
  name: 'В хедере редактора пропсов выводится название компонента',
  args: {
    content: [exampleElement],
  },
  play: async (context) => {
    const contentEditor = new ContentEditorTO(context);
    await contentEditor.selectElement(exampleElement.id);
    const editorTitle = await contentEditor.getEditorDrawerTitle();

    expect(editorTitle).toHaveTextContent(exampleElement.component.name);
  },
};

export const EventChange: Story = {
  name: 'При редактировании пропсов, вызывается onChange с изменённым контентом',
  args: {
    content: [exampleElement],
    onChange: fn(),
  },
};

export const EventRemove: Story = {
  name: 'При удалении элемента, вызывается onChange с изменённым контентом',
  args: {
    content: [exampleElement],
    onChange: fn(),
  },
};
