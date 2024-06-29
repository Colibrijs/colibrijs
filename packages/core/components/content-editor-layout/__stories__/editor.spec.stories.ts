import { expect } from '@storybook/test';

import ContentEditorLayoutStoriesMeta from './content-editor-layout.stories';
import type { Story, StoryMeta } from './content-editor-layout.stories';
import { ContentEditorLayoutTO } from '../test-object';

export default {
  ...ContentEditorLayoutStoriesMeta,
  title: 'ContentEditorLayout/tests/editor',
} satisfies StoryMeta;

export const DefaultOpened: Story = {
  name: 'По умолчанию, редактор открыт',
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    await layout.waitForContent();

    expect(await layout.isEditorVisible()).toBeTruthy();
  },
};

export const OpensByTrigger: Story = {
  name: 'По клику на кнопку "открыть редактор", редактор открывается',
  args: { editActivatedByDefault: false },
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    await layout.waitForContent();
    await layout.startEdit();

    expect(await layout.isEditorVisible()).toBeTruthy();
  },
};

export const ClosesByTrigger: Story = {
  name: 'По клику на кнопку "закрыть редактор", редактор закрывается',
  args: { editActivatedByDefault: true },
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    await layout.waitForContent();
    await layout.endEdit();

    expect(await layout.isEditorVisible()).toBeFalsy();
  },
};
