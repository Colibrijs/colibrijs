import { expect, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';
import { PropEditorTO } from '../test-object';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/number-editor',
} satisfies PropEditorMeta;

export const NumberEditorValue: Story = {
  name: 'Передается value пропс в number-editor инпут',
  args: {
    value: 228,
  },
  play: async ({ canvasElement, step }) => {
    const numberEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    const input = numberEditorTO.getInput();

    await step('Проверяем, что инпуте значение из пропса value', () => {
      expect(input).toHaveValue('228');
    });
  },
};

export const NumberEditorChange: Story = {
  name: 'Вызывается onChange с введённым значением при вводе в инпут в number-editor',
  args: {
    value: '',
    onChange: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const numberEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    await numberEditorTO.setValue('227');

    await step('Проверяем, что вызвалось onChange событие с введенным числом', () => {
      expect(args.onChange).toHaveBeenCalledWith('227');
    });
  },
};

export const NumberEditorName: Story = {
  name: 'Отображается именование инпута в number-editor',
  args: {
    name: 'num-name',
  },
  play: async ({ canvasElement, step }) => {
    const numberEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    const name = numberEditorTO.getPropertyName();

    await step('Проверяем, что именование инпута - значение пропса name', () => {
      expect(name).toHaveTextContent('num-name');
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
  },
  play: async ({ canvasElement, step }) => {
    const numberEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    const description = numberEditorTO.getPropertyDescription();

    await step('Проверяем, что описание инпута - значение пропса property.description', () => {
      expect(description).toHaveTextContent('num-description');
    });
  },
};
