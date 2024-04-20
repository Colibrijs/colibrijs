import type { ExampleProps } from '@colibrijs/example';
import type { Meta, StoryObj } from '@storybook/react';

import { Microfrontend } from '../microfrontend';

export type MicrofrontendMeta = Meta<typeof Microfrontend<ExampleProps>>;
export type Story = StoryObj<typeof Microfrontend<ExampleProps>>;

export default {
  component: Microfrontend,
  title: 'Microfrontend',
  args: {
    id: '1',
    componentName: '_colibrijs__example',
    libraryName: '_colibrijs__example',
    src: 'https://colibrijs.github.io/colibrijs/issue-16/example/@colibrijs/example',
    props: {
      title: 'Удалённый компонент',
      text: 'Но тем не менее, рендерюсь здесь',
    },
  },
} satisfies MicrofrontendMeta;

export const Default: Story = {};
