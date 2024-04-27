import type { Meta, StoryObj } from '@storybook/react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentsAdd, type Props } from '../components-add';

export type ComponentsAddMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: ComponentsAdd,
  title: 'ComponentsAdd',
} satisfies ComponentsAddMeta;

export const Default: Story = {};
