import { expect, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';
import { PropEditorTO } from '../test-object';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/object-editor',
  args: {
    onChange: fn(),
    testId: 'object-editor',
    name: 'mainObject',
    value: {
      name: 'kek',
      age: 11,
      additionalInformation: {
        isBald: true,
      },
    },
    property: {
      type: 'object',
      description: 'description',
      properties: {
        name: {
          type: 'string',
          description: 'your name',
        },
        age: {
          type: 'number',
          description: 'your age',
        },
        additionalInformation: {
          type: 'object',
          description: 'additional information',
          properties: {
            isBald: {
              type: 'boolean',
              description: 'is bald',
            },
          },
        },
      },
    },
  },
} satisfies PropEditorMeta;

export const ObjectMainName: Story = {
  name: 'Главный объект имеет заголовок из пропа name',
  play: async ({ canvasElement, step }) => {
    const objectEditor = new PropEditorTO({ canvasElement, step }, 'object-editor');
    const name = objectEditor.getPropertyName();

    await expect(name, 'Проверяем, что именование объекта равно пропсу name').toHaveTextContent(
      'mainObject'
    );
  },
};

export const NestedObjectsName: Story = {
  name: 'Корректно именуются вложенные объекты',
  play: async ({ canvasElement, step }) => {
    const additionalInformation = new PropEditorTO(
      { canvasElement, step },
      'object-editor__additionalInformation'
    );
    const additionalInformationName = additionalInformation.getPropertyName();

    expect(
      additionalInformationName,
      'Проверяем, что имя объекта - именование свойства из properties пропа property'
    ).toHaveTextContent('additionalInformation');
  },
};

export const ValueChanging: Story = {
  name: 'При вводе данных вызывается onChange со всеми данными в property с измененным конкретным свойством',
  args: {
    onChange: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const numberEditor = new PropEditorTO({ canvasElement, step }, 'object-editor__age');
    await numberEditor.setValue('1');

    expect(
      args.onChange,
      'Убеждаемся, что вызвался onChange со значениями из value, а так же с измененными данными age'
    ).toHaveBeenCalledWith({
      name: 'kek',
      age: 111,
      additionalInformation: {
        isBald: true,
      },
    });
  },
};

export const CorrectDefaultValues: Story = {
  name: 'Корректно передаются все значения из value',
  args: {
    value: { name: 'Thomas', age: 14, additionalInformation: { isBald: true } },
    onChange: fn(),
    name: 'mainObject',
  },
  play: async ({ canvasElement, step }) => {
    const nameEditor = new PropEditorTO({ canvasElement, step }, 'object-editor__name');
    const nameValue = nameEditor.getValue();

    const ageEditor = new PropEditorTO({ canvasElement, step }, 'object-editor__age');
    const ageValue = ageEditor.getValue();

    const isBaldEditor = new PropEditorTO(
      { canvasElement, step },
      'object-editor__additionalInformation__isBald'
    );
    const isBaldValue = isBaldEditor.getValue();

    step('Убеждаемся, что значение полей равны данным переданным в value пропсе', () => {
      expect(nameValue).toBe('Thomas');
      expect(ageValue).toBe('14');
      expect(isBaldValue).toBe(true);
    });
  },
};
