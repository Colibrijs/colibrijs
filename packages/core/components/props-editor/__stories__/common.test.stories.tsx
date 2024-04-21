import { expect, within, userEvent, fn } from '@storybook/test';

import PropsEditorStoryMeta, { type PropsEditorMeta, type Story } from './props-editor.stories';
import schema from './schema.json';

import { getPropertiesNames } from '../utils/get-properties-names';

export default {
  ...PropsEditorStoryMeta,
  title: 'PropsEditor/tests/callbacks',
} satisfies PropsEditorMeta;

export const ChangeEvent: Story = {
  name: 'При изменении поля, происходит вызов onChange с нужными данными',
  play: async ({ args, canvasElement, step }) => {
    const { getAllByTestId } = within(canvasElement);
    const inputs = getAllByTestId('props-editor__input');
    const firstInput = inputs[0];
    if (!firstInput) throw Error('Не найден инпут');

    await step(
      'Вводим слово "Кек" в первый инпут',
      async () => await userEvent.type(firstInput, 'Кек')
    );

    await step('Проверем, что пропс onChange был вызван с корректными данными', async () => {
      await expect(args.onChange).toHaveBeenCalledWith({ name: 'Кек', surname: '' });
    });
  },
};

export const LabelFields: Story = {
  name: 'При передаче схемы, отрисовываются корректные поля с лейблами',
  play: async ({ args, canvasElement, step }) => {
    const { getAllByTestId } = within(canvasElement);
    const items = getAllByTestId('props-editor__item');

    const keys = getPropertiesNames(args.schema);
    await step('Ищем все поля и убеждаемся что лейблы соответствуют тем, что в схеме', () => {
      items.forEach((item, index) => {
        const { getByTestId } = within(item);
        const label = getByTestId('props-editor__label');
        const labelText = label?.textContent?.trim();
        const input = getByTestId('props-editor__input');

        expect(labelText).toBe(keys[index]);
        expect(input).toBeInTheDocument();
      });
    });
  },
};

export const DefaultValues: Story = {
  name: 'При передаче value, подставляются корректные данные',
  args: {
    onChange: fn(),
    schema: JSON.stringify(schema, null, 2),
    value: {
      name: 'Ivan',
      surname: 'Ivanych',
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const { getAllByTestId } = within(canvasElement);
    const items = getAllByTestId('props-editor__item');

    const keys = getPropertiesNames(args.schema);
    await step('Ищем все поля и убеждаемся что значения соответствуют тем, что в пропсе', () => {
      items.forEach((item, index) => {
        const { getByTestId } = within(item);
        const input: HTMLInputElement = getByTestId('props-editor__input');
        const keyName = keys[index];
        if (!keyName) throw Error('Не найден ключ с таким индексом');
        expect(input.value).toBe(args.value[keyName]);
      });
    });
  },
};
