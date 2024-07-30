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
    const nameEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__name');
    const nameInput = nameEditorTO.getInput()!;

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
    const nameEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__name');
    const ageEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__age');
    const isBaldEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__isBald');

    await step('Ищем все поля и убеждаемся что лейблы соответствуют тем, что в схеме', async () => {
      const nameLabel = nameEditorTO.getPropertyName();
      const ageLabel = ageEditorTO.getPropertyName();
      const isBaldLabel = isBaldEditorTO.getPropertyName();

      await expect(nameLabel).toHaveTextContent('name');
      await expect(ageLabel).toHaveTextContent('age');
      await expect(isBaldLabel).toHaveTextContent('isBald');
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
    const nameEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__name');
    const ageEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__age');

    await step('Ищем все поля и убеждаемся что значения соответствуют тем, что в пропсе', () => {
      const nameInput = nameEditorTO.getInput();
      const ageInput = ageEditorTO.getInput();

      expect(nameInput).toHaveValue('Ivan');
      expect(ageInput).toHaveValue(227);
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
    const nameEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__name');
    const ageEditorTO = new PropEditorTO({ canvasElement, step }, 'props-editor__age');

    await step('Ищем все поля и убеждаемся описание соответствуют тем, что в схеме', async () => {
      const nameDescription = nameEditorTO.getPropertyDescription();
      const ageDescription = ageEditorTO.getPropertyDescription();

      await expect(nameDescription).toHaveTextContent('Your name');
      await expect(ageDescription).toHaveTextContent('Your age');
    });
  },
};
