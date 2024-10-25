import { examplePage } from '@colibrijs/mocks/pages';
import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '../page-title';

export type PageTitleMeta = Meta<typeof PageTitle>;
export type Story = StoryObj<typeof PageTitle>;

export default {
  component: PageTitle,
  title: 'PageTitle',
  args: { page: examplePage },
} satisfies PageTitleMeta;

export const Default: Story = {};
