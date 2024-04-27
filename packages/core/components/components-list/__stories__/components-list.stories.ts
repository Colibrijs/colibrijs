import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { withMockedApi, type WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentsList } from '../components-list';

export type ComponentsListMeta = Meta<WithMockedApi<ComponentProps<typeof ComponentsList>>>;
export type Story = StoryObj<WithMockedApi<ComponentProps<typeof ComponentsList>>>;

export default {
  component: ComponentsList,
  title: 'ComponentsList',
} satisfies ComponentsListMeta;

export const Default: Story = {};

export const Empty: Story = {
  decorators: [
    withMockedApi((apiClient) =>
      apiClient.override({
        components: {
          get: () => Promise.resolve([]),
        },
      })
    ),
  ],
};

export const Loading: Story = {
  decorators: [
    withMockedApi((apiClient) =>
      apiClient.override({
        components: {
          get: () => new Promise(() => {}),
        },
      })
    ),
  ],
};
