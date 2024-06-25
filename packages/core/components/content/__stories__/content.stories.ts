import { exampleElements } from '@colibrijs/mocks/elements';
import type { Meta, StoryObj } from '@storybook/react';

import { Content } from '../content';

export type StoryMeta = Meta<typeof Content>;
export type Story = StoryObj<typeof Content>;

export default {
  component: Content,
  title: 'Content',
  args: {
    content: exampleElements,
  },
} satisfies StoryMeta;

export const Default: Story = {};
