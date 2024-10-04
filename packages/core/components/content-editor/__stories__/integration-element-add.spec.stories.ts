import { within, expect, screen, userEvent } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/integration-element-add',
} satisfies StoryMeta;

export const HiddenByDefault: Story = {
  name: 'Добавление элемента скрыто по умолчанию',
  play: async () => {
    const elementAdd = screen.queryByTestId('content-editor-element-add');
    expect(elementAdd).toBeNull();
  },
};

export const VisibleOnClick: Story = {
  name: 'При клике на кнопку "добавить элемент", начинается добавление элемента',
  play: async () => {
    const addElementButton = screen.getByTestId('content-editor__add-element-button');
    await userEvent.click(addElementButton);

    const elementAdd = screen.getByTestId('content-editor-element-add');
    expect(elementAdd).toBeVisible();
  },
};

export const HidesOnClose: Story = {
  name: 'Когда добавление элемента отменено, интерфейс добавления скрывается',
  play: async ({ canvasElement, step }) => {
    const story = within(canvasElement);
    const addElementButton = story.getByTestId('content-editor__add-element-button');
    await step('Кликаю на кнопку "Добавить элемент"', () => userEvent.click(addElementButton));

    await step('Кликаю на кнопку закрытия', async () => {
      const elementAdd = screen.queryByTestId('content-editor-element-add');
      expect(elementAdd).toBeVisible();
      const closeButton = screen.getByTestId('element-add__close-button');
      await userEvent.click(closeButton);
    });

    const elementAdd = screen.queryByTestId('content-editor-element-add');

    expect(elementAdd, 'Убеждаюсь что здесь жопа').not.toBeVisible();
  },
};

export const HidesOnAdded: Story = {
  name: 'Когда добавляется новый элемент, интерфейс добавления скрывается',
};

export const AtEndIfNoSelected: Story = {
  name: 'Если ни один из элементов не выбран, новый элемент добавляется в конец дерева',
};

export const AfterIfSelected: Story = {
  name: 'Если один из элементов выбран, новый элемент добавляется после выбранного',
};
