import { exampleComponent } from '@colibrijs/mocks/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import type { WithMockedApi } from '../../../hooks/use-api/mocked';
import { ComponentRemove, type Props } from '../component-remove';

export type ComponentRemoveMeta = Meta<WithMockedApi<Props>>;
export type Story = StoryObj<WithMockedApi<Props>>;

export default {
  component: ComponentRemove,
  title: 'ComponentRemove',
  args: {
    component: exampleComponent,
    onRemove: fn(),
  },
} satisfies ComponentRemoveMeta;

export const Default: Story = {};
