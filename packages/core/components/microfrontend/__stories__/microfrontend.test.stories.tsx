import { expect, within } from '@storybook/test';

import MicrofrontendStoryMeta from './microfrontend.stories';
import type { MicrofrontendMeta, Story } from './microfrontend.stories';

export default {
  ...MicrofrontendStoryMeta,
  title: 'Microfrontend/tests/remote',
} satisfies MicrofrontendMeta;

export const RenderProps: Story = {
  name: 'Загружает и рендерит удалённый компонент с пропсами, указанными в поле props',
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

export const Styles: Story = {
  name: 'Компоненты рендерятся со стилями, указанными в css',
  play: async ({ canvasElement, step }) => {
    const story = within(canvasElement);
    const text = await story.findByTestId('example__text');

    await step('Проверяю, что элемент отрендерился со стилями, указанными в css', () => {
      /** @see {@link https://github.com/colibrijs/colibrijs/blob/main/packages/example/components/example/example.css} */
      expect(text).toHaveStyle({ color: 'rgb(51, 51, 51)' });
    });
  },
};
