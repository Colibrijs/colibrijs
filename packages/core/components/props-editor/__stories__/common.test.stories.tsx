import { expect, userEvent, fn } from '@storybook/test';

import PropsEditorStoryMeta, { type PropsEditorMeta, type Story } from './props-editor.stories';
import { schema } from './schema';
import { PropEditorTO } from '../../prop-editor/test-object';

export default {
  ...PropsEditorStoryMeta,
  title: 'PropsEditor/tests/common',
} satisfies PropsEditorMeta;

export const ChangeEvent: Story = {
  name: 'При изменении поля, происходит вызов onChange с введенными данными',
  args: {
    onChange: fn(),
    schema,
    value: {
      name: '',
      age: 229,
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const propEditorTO = new PropEditorTO(canvasElement);
    const nameInput = propEditorTO.getElement('props-editor__name', 'input')!;

    await step('Вводим слово "Кек" в первый инпут', async () => {
      await userEvent.type(nameInput, 'Кек');
    });

    await step('Проверем, что пропс onChange был вызван с введенными данными', async () => {
      await expect(args.onChange).toHaveBeenCalledWith({ name: 'Кек', age: 229 });
    });
  },
};

export const LabelFields: Story = {
  name: 'При передаче схемы, отрисовываются поля с лейблами из JSON-схемы',
  play: async ({ canvasElement, step }) => {
    const propEditorTO = new PropEditorTO(canvasElement);

    await step('Ищем все поля и убеждаемся что лейблы соответствуют тем, что в схеме', () => {
      const nameLabel = propEditorTO.getElement('props-editor__name', 'label');
      const ageLabel = propEditorTO.getElement('props-editor__age', 'label');

      expect(nameLabel).toHaveTextContent('name');
      expect(ageLabel).toHaveTextContent('age');
    });
  },
};

export const DefaultValues: Story = {
  name: 'По умолчанию отображаются значения из value',
  args: {
    onChange: fn(),
    schema,
    value: {
      name: 'Ivan',
      age: 227,
    },
  },
  play: async ({ canvasElement, step }) => {
    const propEditorTO = new PropEditorTO(canvasElement);

    await step('Ищем все поля и убеждаемся что значения соответствуют тем, что в пропсе', () => {
      const nameInput = propEditorTO.getElement('props-editor__name', 'input');
      const ageInput = propEditorTO.getElement('props-editor__age', 'input');

      expect(nameInput).toHaveValue('Ivan');
      expect(ageInput).toHaveValue(227);
    });
  },
};

export const TypeAttributes: Story = {
  name: 'У инпутов значение аттрибута type зависит от типов значений в пропсе schema',
  args: {
    onChange: fn(),
    schema,
    value: {
      name: 'Ivan',
      age: 1488,
    },
  },
  play: async ({ canvasElement, step }) => {
    const propEditorTO = new PropEditorTO(canvasElement);

    await step('Ищем все поля и убеждаемся что type соответствуют тем, что в схеме', () => {
      const nameInput = propEditorTO.getElement('props-editor__name', 'input');
      const ageInput = propEditorTO.getElement('props-editor__age', 'input');

      expect(nameInput).toHaveAttribute('type', 'text');
      expect(ageInput).toHaveAttribute('type', 'number');
    });
  },
};

export const Description: Story = {
  name: 'При передаче схемы, отрисовываются поля с описанием свойства из JSON-схемы',
  args: {
    onChange: fn(),
    schema,
    value: {
      name: 'Ivan',
      age: 1488,
    },
  },
  play: async ({ canvasElement, step }) => {
    const propEditorTO = new PropEditorTO(canvasElement);

    await step('Ищем все поля и убеждаемся описание соответствуют тем, что в схеме', () => {
      const nameDescription = propEditorTO.getElement('props-editor__name', 'description');
      const ageDescription = propEditorTO.getElement('props-editor__age', 'description');

      expect(nameDescription).toHaveTextContent('Your name');
      expect(ageDescription).toHaveTextContent('Your age');
    });
  },
};
