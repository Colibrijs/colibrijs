import { textComponent } from '@colibrijs/mocks/components';
import { within, expect, screen, userEvent, waitFor } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ElementAddTO } from '../../element-add/test-object';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/integration-element-add',
} satisfies StoryMeta;

export const HiddenByDefault: Story = {
  name: 'Добавление элемента скрыто по умолчанию',
  play: async () => {
    const elementAdd = screen.queryByTestId('content-editor-element-add');
    await expect(elementAdd).toBeNull();
  },
};

export const VisibleOnClick: Story = {
  name: 'При клике на кнопку "добавить элемент", начинается добавление элемента',
  play: async () => {
    const addElementButton = screen.getByTestId('content-editor__add-element-button');
    await userEvent.click(addElementButton);

    const elementAdd = screen.getByTestId('content-editor-element-add');
    await expect(elementAdd).toBeVisible();
  },
};

export const HidesOnClose: Story = {
  name: 'Когда добавление элемента отменено, интерфейс добавления скрывается',
  play: async ({ step, canvasElement }) => {
    const story = within(canvasElement);
    const addElementButton = story.getByTestId('content-editor__add-element-button');

    await step('Кликаю на кнопку "Добавить элемент"', () => userEvent.click(addElementButton));
    const elementAdd = new ElementAddTO({
      canvasElement,
      step,
      testId: 'content-editor-element-add',
    });
    const dialog = elementAdd.getDialogElement();

    await step('Кликаю на кнопку закрытия', async () => {
      const closeButton = within(dialog).getByTestId('element-add__close-button');
      await userEvent.click(closeButton);
    });

    await waitFor(async () => await expect(dialog, 'проверяю что элемент скрыт').not.toBeVisible());
  },
};

export const HidesOnAdded: Story = {
  name: 'Когда добавляется новый элемент, интерфейс добавления скрывается',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
      });
    }),
  ],
  play: async ({ step, canvasElement }) => {
    const story = within(canvasElement);
    const addElementButton = story.getByTestId('content-editor__add-element-button');
    const elementAdd = new ElementAddTO({
      canvasElement,
      step,
      testId: 'content-editor-element-add',
    });

    await step('Кликаю на кнопку "Добавить элемент"', () => userEvent.click(addElementButton));

    await elementAdd.clickOnComponentsSelect();
    await elementAdd.selectComponent('2');
    await elementAdd.clickAdd();
    const dialog = elementAdd.getDialogElement();
    await step('Кликаю на кнопку закрытия', async () => {
      const closeButton = within(dialog).getByTestId('element-add__close-button');
      await userEvent.click(closeButton);
    });

    await waitFor(async () => await expect(dialog, 'проверяю что элемент скрыт').not.toBeVisible());
  },
};

export const AtEndIfNoSelected: Story = {
  name: 'Если ни один из элементов не выбран, новый элемент добавляется в конец дерева',
};

export const AfterIfSelected: Story = {
  name: 'Если один из элементов выбран, новый элемент добавляется после выбранного',
};
