import { exampleComponent } from '@colibrijs/mocks/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentsRemove, type Props } from '../components-remove';

export type ComponentsRemoveMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: ComponentsRemove,
  title: 'ComponentsRemove',
  args: {
    component: exampleComponent,
    onRemove: fn(),
  },
} satisfies ComponentsRemoveMeta;

export const Default: Story = {};
