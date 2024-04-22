import { expect, within, userEvent, fn } from '@storybook/test';

import PropsEditorStoryMeta, { type PropsEditorMeta, type Story } from './props-editor.stories';
import schema from './schema.json';

export default {
  ...PropsEditorStoryMeta,
  title: 'PropsEditor/tests/common',
} satisfies PropsEditorMeta;

export const ChangeEvent: Story = {
  name: 'При изменении поля, происходит вызов onChange с введенными данными',
  play: async ({ args, canvasElement, step }) => {
    const { getAllByTestId } = within(canvasElement);
    const firstInput = getAllByTestId('props-editor__input')[0]!;

    await step(
      'Вводим слово "Кек" в первый инпут',
      async () => await userEvent.type(firstInput, 'Кек')
    );

    await step('Проверем, что пропс onChange был вызван с введенными данными', async () => {
      await expect(args.onChange).toHaveBeenCalledWith({ name: 'Кек', surname: '' });
    });
  },
};

export const LabelFields: Story = {
  name: 'При передаче схемы, отрисовываются поля с лейблами из JSON-схемы',
  play: async ({ canvasElement, step }) => {
    const { getAllByTestId } = within(canvasElement);
    const items = getAllByTestId('props-editor__item');

    await step('Ищем все поля и убеждаемся что лейблы соответствуют тем, что в схеме', () => {
      const nameLabel = within(items[0]!).getByTestId('props-editor__label');
      const surnameLabel = within(items[1]!).getByTestId('props-editor__label');

      expect(nameLabel).toHaveTextContent('name');
      expect(surnameLabel).toHaveTextContent('surname');
    });
  },
};

export const DefaultValues: Story = {
  name: 'По умолчанию отображаются значения из value',
  args: {
    onChange: fn(),
    schema: JSON.stringify(schema, null, 2),
    value: {
      name: 'Ivan',
      surname: 'Ivanych',
    },
  },
  play: async ({ canvasElement, step }) => {
    const { getAllByTestId } = within(canvasElement);
    const items = getAllByTestId('props-editor__item');

    await step('Ищем все поля и убеждаемся что значения соответствуют тем, что в пропсе', () => {
      const nameInput: HTMLInputElement = within(items[0]!).getByTestId('props-editor__input');
      const surnameInput: HTMLInputElement = within(items[1]!).getByTestId('props-editor__input');

      expect(nameInput.value).toBe('Ivan');
      expect(surnameInput.value).toBe('Ivanych');
    });
  },
};
