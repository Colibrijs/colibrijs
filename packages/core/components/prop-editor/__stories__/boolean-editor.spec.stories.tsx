import { expect, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';
import { PropEditorTO } from '../test-object';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/boolean-editor',
} satisfies PropEditorMeta;

export const BooleanEditorValue: Story = {
  name: 'Передается value пропс в boolean-editor свитчер',
  args: {
    property: {
      type: 'boolean',
      description: 'some description',
    },
    value: true,
  },
  play: async ({ canvasElement, step }) => {
    const booleanEditor = new PropEditorTO({ canvasElement, step }, 'prop-editor');
    const switcher = booleanEditor.getSwitcher();

    expect(switcher, 'Проверяем, что по умолчанию свитчер чекнут').toHaveAttribute(
      'aria-checked',
      'true'
    );
  },
};

export const BooleanEditorChange: Story = {
  name: 'Вызывается onChange со значением при изменении состояния свитчера',
  args: {
    property: {
      type: 'boolean',
      description: 'some description',
    },
    value: false,
    onChange: fn(),
  },
  play: async ({ canvasElement, step, args }) => {
    const booleanEditor = new PropEditorTO({ canvasElement, step }, 'prop-editor');

    await booleanEditor.toggleSwitcher();

    expect(
      args.onChange,
      'Проверяем, что был вызван onChange с противоположным значением'
    ).toHaveBeenCalledWith(true);
  },
};

export const BooleanEditorName: Story = {
  name: 'Отображается именование инпута в boolean-editor',
  args: {
    property: {
      type: 'boolean',
      description: 'some description',
    },
    value: false,
    name: 'bool-name',
  },
  play: async ({ canvasElement, step }) => {
    const booleanEditor = new PropEditorTO({ canvasElement, step }, 'prop-editor');
    const name = booleanEditor.getPropertyName();

    expect(name, 'Проверяем, что именование инпута - значение пропса name').toHaveTextContent(
      'bool-name'
    );
  },
};

export const BooleanEditorDescription: Story = {
  name: 'Отображается описание property в boolean-editor',
  args: {
    property: {
      type: 'boolean',
      description: 'bool-description',
    },
  },
  play: async ({ canvasElement, step }) => {
    const booleanEditor = new PropEditorTO({ canvasElement, step }, 'prop-editor');
    const description = booleanEditor.getPropertyDescription();

    await expect(
      description,
      'Проверяем, что описание свитчера - значение пропса property.description'
    ).toHaveTextContent('bool-description');
  },
};
