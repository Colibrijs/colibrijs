import { expect, within, userEvent } from '@storybook/test';

import PropsEditorStoryMeta, { type PropsEditorMeta, type Story } from './props-editor.stories';

export default {
  ...PropsEditorStoryMeta,
  title: 'PropsEditor/tests/callbacks',
} satisfies PropsEditorMeta;

export const Submitted: Story = {
  name: 'По клику на кнопку "Save", вызывается пропс onChange',
  play: async ({ args, canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const button = getByTestId('props-editor__button');

    await step('Кликаю по кнопке, которая сохраняет пропсы', () => userEvent.click(button));

    await step('Проверяю, что пропс onChange был вызван', async () => {
      await expect(args.onChange).toHaveBeenCalled();
    });
  },
};
