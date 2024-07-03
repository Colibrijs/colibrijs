import { expect, within, userEvent, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/string-editor',
} satisfies PropEditorMeta;

export const StringEditorValue: Story = {
  name: 'Передается value пропс в string-editor',
  args: {
    property: {
      type: 'string',
      description: 'description',
    },
    name: 'Name',
    onChange: fn(),
    value: 'Valueff',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const stringEditor = getByTestId('string-editor__input');

    await step('Проверяем, что инпуте значение из пропса value', () => {
      expect(stringEditor).toHaveValue('Valueff');
    });
  },
};

export const StringEditorChange: Story = {
  name: 'Вызывается onChange при вводе в инпут в string-editor',
  args: {
    property: {
      type: 'string',
      description: 'description',
    },
    name: 'Name',
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const stringEditor = getByTestId('string-editor__input');

    await userEvent.type(stringEditor, 'Kek');

    await step('Проверяем, что вызвалось onChange событие с введенным текстом', () => {
      expect(StringEditorChange.args?.onChange).toHaveBeenCalledWith('Kek');
    });
  },
};

export const StringEditorName: Story = {
  name: 'Отображается именование инпута в string-editor',
  args: {
    property: {
      type: 'string',
      description: 'description',
    },
    name: 'Name',
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const label = getByTestId('string-editor__label');

    await step('Проверяем, что именование инпута - значение пропса name', () => {
      expect(label).toHaveTextContent('Name');
    });
  },
};

export const StringEditorDescription: Story = {
  name: 'Отображается описание property в string-editor',
  args: {
    property: {
      type: 'string',
      description: 'description',
    },
    name: 'Name',
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const description = getByTestId('string-editor__description');

    await step('Проверяем, что описание инпута - значение пропса property.description', () => {
      expect(description).toHaveTextContent('description');
    });
  },
};
