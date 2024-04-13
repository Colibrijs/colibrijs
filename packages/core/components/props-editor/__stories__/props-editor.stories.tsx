import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { PropsEditor } from '../props-editor';

type Story = StoryObj<typeof PropsEditor>;

export default {
  component: PropsEditor,
  title: 'PropsEditor',
  args: {
    schema: {
      name: 'Peet',
      surname: 'Peeterson',
    },
  },
} satisfies Meta<typeof PropsEditor>;

export const Default: Story = {
  play: ({ canvasElement }) => {
    const story = within(canvasElement);
    const label = story.getByTestId('props-editor__label');

    expect(label).toHaveTextContent('Props:');
  },
};
