import type { Meta, StoryObj } from '@storybook/react';

import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentsList } from '../components-list';

type Story = StoryObj<typeof ComponentsList>;

export default {
  component: ComponentsList,
  title: 'ComponentsList',
} satisfies Meta<typeof ComponentsList>;

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
