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
    const stringEditorTO = new PropEditorTO({ canvasElement, step }, 'prop-editor');
    const input = stringEditorTO.getInput();

    expect(input, 'Проверяем, что инпуте значение из пропса value').toHaveValue(
      args.value as string
    );
  },
};

export const StringEditorChange: Story = {
  name: 'Вызывается onChange с введённым значением при вводе в инпут в string-editor',
  args: {
    onChange: fn(),
    value: '',
  },
  play: async ({ canvasElement, step, args }) => {
    const stringEditorTO = new PropEditorTO({ canvasElement, step }, 'prop-editor');

    await stringEditorTO.setValue('Kek');

    await step('Проверяем, что вызвалось onChange событие с введенным текстом', () => {
      expect(
        args.onChange,
        'Проверяем, что вызвалось onChange событие с введенным текстом'
      ).toHaveBeenCalledWith('Kek');
    });
  },
};

export const StringEditorName: Story = {
  name: 'Отображается именование инпута в string-editor',
  args: {
    name: 'Name',
  },
  play: async ({ canvasElement, step }) => {
    const stringEditorTO = new PropEditorTO({ canvasElement, step }, 'prop-editor');
    const name = stringEditorTO.getPropertyName();

    expect(name, 'Проверяем, что именование инпута - значение пропса name').toHaveTextContent(
      'Name'
    );
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
    const stringEditorTO = new PropEditorTO({ canvasElement, step }, 'prop-editor');
    const description = stringEditorTO.getPropertyDescription();

    expect(
      description,
      'Проверяем, что описание инпута - значение пропса property.description'
    ).toHaveTextContent('description');
  },
};
