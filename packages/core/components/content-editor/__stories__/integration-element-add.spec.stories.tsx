import { exampleComponent, textComponent } from '@colibrijs/mocks/components';
import { exampleElement } from '@colibrijs/mocks/elements';
import { expect, waitFor } from '@storybook/test';

import ContentEditorStoriesMeta from './content-editor.stories';
import type { Story, StoryMeta } from './content-editor.stories';
import { withMockedApi } from '../../../hooks/use-api/mocked';
import { ContentEditorTO } from '../test-object';

export default {
  ...ContentEditorStoriesMeta,
  title: 'ContentEditor/tests/integration-element-add',
} satisfies StoryMeta;

export const HiddenByDefault: Story = {
  name: 'Добавление элемента скрыто по умолчанию',
  play: async ({ step, canvasElement }) => {
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    const addElementVisible = contentEditor.getAddElementTO().isVisible();

    await expect(addElementVisible, 'Проверяю что добавление элемента не отображается').toBe(false);
  },
};

export const VisibleOnClick: Story = {
  name: 'При клике на кнопку "добавить элемент", начинается добавление элемента',
  play: async ({ step, canvasElement }) => {
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    await contentEditor.startAddingElement();
    const addElementVisible = contentEditor.getAddElementTO().isVisible();

    await expect(addElementVisible, 'Проверяю что добавление элемента отображается').toBe(true);
  },
};

export const HidesOnClose: Story = {
  name: 'Когда добавление элемента отменено, интерфейс добавления скрывается',
  play: async ({ step, canvasElement }) => {
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    const addElement = contentEditor.getAddElementTO();

    await contentEditor.startAddingElement();
    await addElement.clickClose();

    await waitFor(() =>
      expect(
        addElement.getContentElement(),
        'проверяю что интерфейс добавления элемента не отображается'
      ).not.toBeVisible()
    );
  },
};

export const HidesOnAdded: Story = {
  name: 'Когда добавляется новый элемент, интерфейс добавления скрывается',
  decorators: [
    withMockedApi((apiClient) => {
      apiClient.override({
        elements: {
          post: () => Promise.resolve(exampleElement),
        },
      });
    }),
  ],
  play: async ({ step, canvasElement }) => {
    const contentEditor = new ContentEditorTO({ step, canvasElement });
    const elementAdd = contentEditor.getAddElementTO();

    await contentEditor.startAddingElement();
    await elementAdd.clickOnComponentsSelect();
    await elementAdd.selectComponent(exampleComponent.id);
    await elementAdd.clickAdd();

    expect(elementAdd.isVisible(), 'проверяю что интерфейс добавления элемента отображается').toBe(
      true
    );
  },
};

export const ErrorOnAdd: Story = {
  name: 'Если при добавлении элемента происходит ошибка, появляется уведомление с текстом ошибки',
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
    const elementAdd = contentEditor.getAddElementTO();

    await contentEditor.startAddingElement();
    await elementAdd.clickOnComponentsSelect();
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();

    await expect(
      await contentEditor.getErrorElement(),
      'проверяю, что появилось уведомление с текстом ошибки'
    ).toHaveTextContent('Ошибка добавления');
  },
};

export const NotHidesOnError: Story = {
  name: 'Если при добавлении элемента происходит ошибка, интерфейс добавления элемента не скрывается',
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
    const elementAdd = contentEditor.getAddElementTO();

    await contentEditor.startAddingElement();
    await elementAdd.clickOnComponentsSelect();
    await elementAdd.selectComponent(textComponent.id);
    await elementAdd.clickAdd();

    expect(elementAdd.isVisible(), 'проверяю что интерфейс добавления элемента отображается').toBe(
      true
    );
  },
};

export const AtEndIfNoSelected: Story = {
  name: 'Если ни один из элементов не выбран, новый элемент добавляется в конец дерева',
};

export const AfterIfSelected: Story = {
  name: 'Если один из элементов выбран, новый элемент добавляется после выбранного',
};
