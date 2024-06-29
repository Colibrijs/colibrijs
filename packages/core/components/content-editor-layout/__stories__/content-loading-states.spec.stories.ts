import { exampleElements } from '@colibrijs/mocks/elements';
import type { IElement } from '@colibrijs/types';
import { expect } from '@storybook/test';

import ContentEditorLayoutStoriesMeta from './content-editor-layout.stories';
import type { Story, StoryMeta } from './content-editor-layout.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorLayoutTO } from '../test-object';

export default {
  ...ContentEditorLayoutStoriesMeta,
  title: 'ContentEditorLayout/tests/content-loading-states',
} satisfies StoryMeta;

export const Success: Story = {
  name: 'Данные загружены успешно - отображается контент, скелетон не отображается',
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
    const content = await layout.getContentElement();
    const skeleton = await layout.getContentSkeleton();

    await expect(content).toBeVisible();
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
    const content = await layout.getContentElement();
    const skeleton = await layout.getContentSkeleton();

    await expect(content).toBeNull();
    await expect(skeleton).toBeVisible();
  },
};

export const Error: Story = {
  name: 'При загрузке данных возникла ошибка - отображается скелетон, контент не отображается',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          get: () => Promise.reject('Произошло что-то неладное'),
        },
      });
    }),
  ],
  play: async (context) => {
    const layout = new ContentEditorLayoutTO(context);
    const content = await layout.getContentElement();
    const skeleton = await layout.getContentSkeleton();

    await expect(content).toBeNull();
    await expect(skeleton).toBeVisible();
  },
};
