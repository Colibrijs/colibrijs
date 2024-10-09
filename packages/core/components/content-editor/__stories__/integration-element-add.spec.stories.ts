import { textComponent } from '@colibrijs/mocks/components';
import { expect, screen, userEvent, waitFor, fn } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ElementAddTO } from '../../element-add/test-object';
import { ContentEditorTO } from '../test-object';

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
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    await contentEditor.addElement();

    const elementAdd = new ElementAddTO({
      canvasElement,
      step,
      testId: 'content-editor-element-add',
    });
    const contentElement = elementAdd.getContentElement();

    await elementAdd.clickClose();
    await waitFor(
      async () => await expect(contentElement, 'проверяю что элемент скрыт').not.toBeVisible()
    );
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
        elements: {
          post: fn(),
        },
      });
    }),
  ],
  play: async ({ step, canvasElement }) => {
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    const elementAdd = new ElementAddTO({
      canvasElement,
      step,
      testId: 'content-editor-element-add',
    });

    await contentEditor.addElement();
    await elementAdd.clickOnComponentsSelect();
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();
    const contentElement = elementAdd.getContentElement();
    await elementAdd.clickClose();

    await waitFor(
      async () => await expect(contentElement, 'проверяю что элемент скрыт').not.toBeVisible()
    );
  },
};

export const ErrorOnAdd: Story = {
  name: 'Когда добавляется новый элемент, и происходит ошибка, интерфейс добавления не скрывается',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        components: {
          get: () => Promise.resolve([textComponent]),
        },
        elements: {
          post: () => Promise.reject(new Error('Ошибка добавления')),
        },
      });
    }),
  ],
  play: async ({ step, canvasElement }) => {
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    const elementAdd = new ElementAddTO({
      canvasElement,
      step,
      testId: 'content-editor-element-add',
    });

    await contentEditor.addElement();
    await elementAdd.clickOnComponentsSelect();
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();

    await step('проверяю, что появилось уведомление с текстом ошибки', async () => {
      const error = await screen.findByTestId('component-editor__error');
      await expect(error).toHaveTextContent('Ошибка добавления');
    });
  },
};

export const AtEndIfNoSelected: Story = {
  name: 'Если ни один из элементов не выбран, новый элемент добавляется в конец дерева',
};

export const AfterIfSelected: Story = {
  name: 'Если один из элементов выбран, новый элемент добавляется после выбранного',
};
