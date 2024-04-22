import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { PropsEditor } from '../props-editor';

export type PropsEditorMeta = Meta<typeof PropsEditor>;
export type Story = StoryObj<typeof PropsEditor>;

export default {
  component: PropsEditor,
  title: 'PropsEditor',
  args: {
    onChange: fn(),
    schema: {
      name: 'Peet',
      surname: 'Peeterson',
    },
  },
} satisfies PropsEditorMeta;

export const Default: Story = {};
