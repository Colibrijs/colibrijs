import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { SidebarDecorator } from '../../layout/sidebar-decorator';
import { PagesList } from '../pages-list';

export type PagesListMeta = Meta<WithMockedApi<ComponentProps<typeof PagesList>>>;
export type Story = StoryObj<ComponentProps<typeof PagesList>>;

export default {
  component: PagesList,
  title: 'PagesList',
  decorators: [SidebarDecorator],
} satisfies PagesListMeta;

export const Default: Story = {};
