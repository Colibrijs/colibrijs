import type { Meta, StoryObj } from '@storybook/react';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentAdd, type Props } from '../component-add';

export type ComponentAddMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: ComponentAdd,
  title: 'ComponentAdd',
} satisfies ComponentAddMeta;

export const Default: Story = {};
