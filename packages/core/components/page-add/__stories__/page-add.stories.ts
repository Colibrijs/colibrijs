import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { PageAdd, type Props } from '../page-add';

export type PageAddMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: PageAdd,
  title: 'PageAdd',
  args: {
    onReady: fn(),
  },
} satisfies PageAddMeta;

export const Default: Story = {};
