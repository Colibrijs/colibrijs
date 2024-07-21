import { expect, within } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/primitive-editor',
} satisfies PropEditorMeta;

export const NumberEditorValue: Story = {
  name: 'При передаче типа number в property, отрисовуется number-editor',
  args: {
    property: {
      type: 'number',
      description: 'description',
    },
  },
  play: async ({ canvasElement, step }) => {
    const primitiveEditor = within(canvasElement).getByTestId('prop-editor');
    const { type } = primitiveEditor.dataset;

    await step('Проверяем, что текущий эдитор - number-editor', () => {
      expect(type).toBe('number');
    });
  },
};

export const StringEditorValue: Story = {
  name: 'При передаче типа string в property, отрисовуется string-editor',
  args: {
    property: {
      type: 'string',
      description: 'description',
    },
  },
  play: async ({ canvasElement, step }) => {
    const primitiveEditor = within(canvasElement).getByTestId('prop-editor');
    const { type } = primitiveEditor.dataset;

    await step('Проверяем, что текущий эдитор - string-editor', () => {
      expect(type).toBe('string');
    });
  },
};

export const BooleanEditorValue: Story = {
  name: 'При передаче типа boolean в property, отрисовуется boolean-editor',
  args: {
    property: {
      type: 'boolean',
      description: 'description',
    },
  },
  play: async ({ canvasElement, step }) => {
    const primitiveEditor = within(canvasElement).getByTestId('prop-editor');
    const { type } = primitiveEditor.dataset;

    await step('Проверяем, что текущий эдитор - boolean-editor', () => {
      expect(type).toBe('boolean');
    });
  },
};
