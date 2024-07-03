import { expect, within, userEvent, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/number-editor',
} satisfies PropEditorMeta;

export const NumberEditorValue: Story = {
  name: 'Передается value пропс в number-editor инпут',
  args: {
    property: {
      type: 'number',
      description: 'description',
    },
    name: 'Name',
    onChange: fn(),
    value: 228,
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const numberEditor = getByTestId('number-editor__input');

    await step('Проверяем, что инпуте значение из пропса value', () => {
      expect(numberEditor).toHaveValue('228');
    });
  },
};

export const NumberEditorChange: Story = {
  name: 'Вызывается onChange при вводе в инпут в number-editor',
  args: {
    property: {
      type: 'number',
      description: 'description',
    },
    name: 'Name',
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const numberEditor = getByTestId('number-editor__input');

    await userEvent.type(numberEditor, '227');

    await step('Проверяем, что вызвалось onChange событие с введенным числом', () => {
      expect(NumberEditorChange.args?.onChange).toHaveBeenCalledWith(227);
    });
  },
};

export const NumberEditorName: Story = {
  name: 'Отображается именование инпута в number-editor',
  args: {
    property: {
      type: 'number',
      description: 'description',
    },
    name: 'num-name',
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const label = getByTestId('number-editor__label');

    await step('Проверяем, что именование инпута - значение пропса name', () => {
      expect(label).toHaveTextContent('num-name');
    });
  },
};

export const NumberEditorDescription: Story = {
  name: 'Отображается описание property в number-editor',
  args: {
    property: {
      type: 'number',
      description: 'num-description',
    },
    name: 'Name',
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step }) => {
    const { getByTestId } = within(canvasElement);
    const description = getByTestId('number-editor__description');

    await step('Проверяем, что описание инпута - значение пропса property.description', () => {
      expect(description).toHaveTextContent('num-description');
    });
  },
};
