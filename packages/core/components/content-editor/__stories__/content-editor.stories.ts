import { exampleElements, textElement } from '@colibrijs/mocks/elements';
import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditor } from '../content-editor';

export type StoryMeta = Meta<WithMockedApi<ComponentProps<typeof ContentEditor>>>;
export type Story = StoryObj<WithMockedApi<ComponentProps<typeof ContentEditor>>>;

export default {
  component: ContentEditor,
  title: 'ContentEditor',
  decorators: [
    withMockedApi((api) =>
      api.override({
        elements: {
          get: () => Promise.resolve(exampleElements),
          post: () => Promise.resolve(textElement),
        },
      })
    ),
  ],
  args: {
    route: examplePage.id,
  },
} satisfies StoryMeta;

export const Default: Story = {};
