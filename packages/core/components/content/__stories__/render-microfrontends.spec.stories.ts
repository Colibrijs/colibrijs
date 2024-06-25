import { exampleElement, textElement } from '@colibrijs/mocks/elements';
import { expect, within } from '@storybook/test';

import ContentStoryMeta, { type StoryMeta, type Story } from './content.stories';

export default {
  ...ContentStoryMeta,
  title: 'Content/tests/render-microfrontends',
} satisfies StoryMeta;

export const Order: Story = {
  name: 'Рендерит микрофронты в порядке в котором они указаны в пропсе content',
  args: {
    content: [exampleElement, textElement],
  },
  play: async ({ canvasElement }) => {
    const story = within(canvasElement);
    const example = await story.findByTestId('example');
    const text = await story.findByTestId('text');

    expect(example.closest('[data-testid="content"] > *:nth-child(1)')).not.toBeNull();
    expect(text.closest('[data-testid="content"] > *:nth-child(2)')).not.toBeNull();
  },
};

export const RenderWithProps: Story = {
  name: 'Рендерит с пропсами, которые указаны в элементах',
  args: {
    content: [exampleElement, textElement],
  },
  play: async ({ canvasElement, step }) => {
    const story = within(canvasElement);

    await step('Проверяем пропсы элемента Example', async () => {
      const example = within(await story.findByTestId('example'));
      const exampleTitle = await example.findByTestId('example__title');
      // @ts-expect-error -- в пропсах exampleElement должен быть title
      expect(exampleTitle).toHaveTextContent(exampleElement.props.title);
    });

    await step('Проверяем пропсы элемента Text', async () => {
      const text = await story.findByTestId('text');
      // @ts-expect-error -- в пропсах textElement должен быть text
      expect(text).toHaveTextContent(textElement.props.text);
    });
  },
};
