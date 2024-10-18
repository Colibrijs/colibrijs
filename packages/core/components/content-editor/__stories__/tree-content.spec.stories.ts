import { exampleElement } from '@colibrijs/mocks/elements';
import { expect } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorTO } from '../test-object';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/tree-content',
} satisfies StoryMeta;

export const Title: Story = {
  name: 'Название листочка в дереве элементов совпадает с названием компонента',
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
    const title = await contentEditor.getTreeNodeTitle(exampleElement.id);

    await expect(title).toHaveTextContent(exampleElement.component.name);
  },
};
