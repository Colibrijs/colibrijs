import { expect, within } from '@storybook/test';

import MicrofrontendStoryMeta from './microfrontend.stories';
import type { MicrofrontendMeta, Story } from './microfrontend.stories';

export default {
  ...MicrofrontendStoryMeta,
  title: 'Microfrontend/tests/remote',
} satisfies MicrofrontendMeta;

export const Example: Story = {
  name: 'Загружает и рендерит удалённый компонент с пропсами, указанными в поле props',
  args: {
    id: '1',
    componentName: '_colibrijs__example',
    libraryName: '_colibrijs__example',
    src: `${process.env.EXAMPLE_URL}@colibrijs/example`,
    props: {
      title: 'Удалённый компонент',
      text: 'Но тем не менее, рендерюсь здесь',
    },
  },
  play: async ({ args, canvasElement }) => {
    const story = within(canvasElement);
    const title = await story.findByTestId('example__title');
    const text = await story.findByTestId('example__text');

    if (typeof args.props.text !== 'string') {
      throw new TypeError('args.props.text должен быть строкой');
    }

    expect(title).toHaveTextContent(args.props.title);
    expect(text).toHaveTextContent(args.props.text);
  },
};
