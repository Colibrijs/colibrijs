import { expect, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';
import { PropEditorTO } from '../test-object';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/string-editor',
} satisfies PropEditorMeta;

export const StringEditorValue: Story = {
  name: 'Передается value пропс в string-editor инпут',
  args: {
    value: 'Valueff',
  },
  play: async ({ canvasElement, step, args }) => {
    const stringEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    const input = stringEditorTO.getInput();

    await step('Проверяем, что инпуте значение из пропса value', () => {
      expect(input).toHaveValue(args.value as string);
    });
  },
};

export const StringEditorChange: Story = {
  name: 'Вызывается onChange с введённым значением при вводе в инпут в string-editor',
  args: {
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step, args }) => {
    const stringEditorTO = new PropEditorTO(canvasElement, 'prop-editor');

    await stringEditorTO.setValue('Kek');

    await step('Проверяем, что вызвалось onChange событие с введенным текстом', () => {
      expect(args.onChange).toHaveBeenCalledWith('Kek');
    });
  },
};

export const StringEditorName: Story = {
  name: 'Отображается именование инпута в string-editor',
  args: {
    name: 'Name',
  },
  play: async ({ canvasElement, step }) => {
    const stringEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    const name = stringEditorTO.getPropertyName();

    await step('Проверяем, что именование инпута - значение пропса name', () => {
      expect(name).toHaveTextContent('Name');
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
  },
  play: async ({ canvasElement, step }) => {
    const stringEditorTO = new PropEditorTO(canvasElement, 'prop-editor');
    const description = stringEditorTO.getPropertyDescription();

    await step('Проверяем, что описание инпута - значение пропса property.description', () => {
      expect(description).toHaveTextContent('description');
    });
  },
};
