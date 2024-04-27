import { exampleComponent } from '@colibrijs/mocks/components';
import { expect, fn, screen, userEvent, within } from '@storybook/test';

import ComponentsRemoveStoriesMeta from './components-remove.stories';
import type { ComponentsRemoveMeta, Story } from './components-remove.stories';

export default {
  ...ComponentsRemoveStoriesMeta,
  title: 'ComponentsRemove/tests/callbacks',
} satisfies ComponentsRemoveMeta;

export const RequestParameters: Story = {
  name: 'После удаления компонента, вызывается пропс onRemove с компонентом в параметре',
  args: { component: exampleComponent, onRemove: fn() },
  play: async ({ args, canvasElement, step }) => {
    const story = within(canvasElement);
    const remove = story.getByTestId('components-remove__remove');

    await step('кликаю на кнопку "Удалить"', () => userEvent.click(remove));
    await step('подтверждаю удаление', async () => {
      // screen, а не story, потому что попап в портале рендерится
      const confirm = await screen.findByTestId('components-remove__confirm');
      await userEvent.click(confirm);
    });

    await step('проверяю, что пропс onRemove был вызван с компонентом в параметре', () =>
      expect(args.onRemove).toHaveBeenCalledWith(args.component)
    );
  },
};
