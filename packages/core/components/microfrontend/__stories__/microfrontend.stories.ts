import { exampleComponent } from '@colibrijs/mocks/components';
import type { Meta, StoryObj } from '@storybook/react';

import { Microfrontend } from '../microfrontend';

type ExampleProps = {
  title: string;
  text?: string;
};

export type MicrofrontendMeta = Meta<typeof Microfrontend<ExampleProps>>;
export type Story = StoryObj<typeof Microfrontend<ExampleProps>>;

export default {
  component: Microfrontend,
  title: 'Microfrontend',
  args: {
    component: {
      ...exampleComponent,
      src: String(process.env.EXAMPLE_URL),
    },
    props: {
      title: 'Удалённый компонент',
      text: 'Но тем не менее, рендерюсь здесь',
    },
  },
} satisfies MicrofrontendMeta;

export const Default: Story = {};
