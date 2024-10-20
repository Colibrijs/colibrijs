import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { PageRemove, type Props } from '../page-remove';

export type PageRemoveMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: PageRemove,
  title: 'PageRemove',
  args: {
    page: examplePage,
  },
} satisfies PageRemoveMeta;

export const Default: Story = {};
