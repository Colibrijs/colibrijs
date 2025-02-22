import { textComponent } from '@colibrijs/mocks/components';
import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ElementAdd, type Props } from '../element-add';

export type ElementAddMeta = Meta<WithMockedApi<Props>>;
export type ElementAddStory = StoryObj<WithMockedApi<Props>>;

export default {
  component: ElementAdd,
  title: 'ElementAdd',
  args: {
    open: true,
    pageId: examplePage.id,
    onClose: fn(),
    onReady: fn(),
  },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
} satisfies ElementAddMeta;

export const Default: ElementAddStory = {};
