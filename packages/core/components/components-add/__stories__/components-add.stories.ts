import type { Meta, StoryObj } from '@storybook/react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentsAdd } from '../components-add';

export type ComponentsAddMeta = Meta<WithMockedApi<typeof ComponentsAdd>>;
export type Story = StoryObj<WithMockedApi<typeof ComponentsAdd>>;

export default {
  component: ComponentsAdd,
  title: 'ComponentsAdd',
} satisfies ComponentsAddMeta;

export const Default: Story = {};
