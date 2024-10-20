import { exampleElement } from '@colibrijs/mocks/elements';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ElementRemove, type Props } from '../element-remove';

export type ElementRemoveMeta = Meta<WithMockedApi<Props>>;
export type ElementRemoveStory = StoryObj<WithMockedApi<Props>>;

export default {
  component: ElementRemove,
  title: 'ElementRemove',
  args: {
    element: exampleElement,
    onRemove: fn(),
  },
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          delete: () => Promise.resolve(exampleElement),
        },
      });
    }),
  ],
} satisfies ElementRemoveMeta;

export const Default: ElementRemoveStory = {};
