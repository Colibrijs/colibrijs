import { exampleElements } from '@colibrijs/mocks/elements';
import type { IElement } from '@colibrijs/types';
import { expect } from '@storybook/test';

import ContentEditorLayoutStoriesMeta from './content-editor-layout.stories';
import type { Story, StoryMeta } from './content-editor-layout.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorLayoutTO } from '../test-object';

export default {
  ...ContentEditorLayoutStoriesMeta,
  title: 'ContentEditorLayout/tests/editor-loading-states',
} satisfies StoryMeta;

export const Success: Story = {
  name: 'Данные загружены успешно - отображается редактор, скелетон не отображается',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          get: () => Promise.resolve(exampleElements),
        },
      });
    }),
  ],
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    await layout.waitForContent();
    const editor = await layout.getEditorElement();
    const skeleton = await layout.getEditorSkeleton();

    await expect(editor).toBeVisible();
    await expect(skeleton).toBeNull();
  },
};

export const Loading: Story = {
  name: 'Данные загружаются - отображается скелетон, контент не отображается',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          // Промис никогда не зарезолвится - данные грузятся бесконечно
          get: () => new Promise<IElement[]>(() => {}),
        },
      });
    }),
  ],
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    const editor = await layout.getEditorElement();
    const skeleton = await layout.getEditorSkeleton();

    await expect(editor).toBeNull();
    await expect(skeleton).toBeVisible();
  },
};

export const Error: Story = {
  name: 'При загрузке данных возникла ошибка - отображается скелетон, данные не отображаются',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          // Промис никогда не зарезолвится - данные грузятся бесконечно
          get: () => new Promise<IElement[]>(() => {}),
        },
      });
    }),
  ],
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    const editor = await layout.getEditorElement();
    const skeleton = await layout.getEditorSkeleton();

    await expect(editor).toBeNull();
    await expect(skeleton).toBeVisible();
  },
};
