import { expect, fn } from '@storybook/test';

import PropEditorStoryMeta, { type PropEditorMeta, type Story } from './prop-editor.stories';
import { ObjectEditorTO, PropEditorTO } from '../test-object';

export default {
  ...PropEditorStoryMeta,
  title: 'PropEditor/tests/object-editor',
} satisfies PropEditorMeta;

export const ObjectMainName: Story = {
  name: 'Главный объект имеет заголовок из пропа name',
  args: {
    name: 'objectName',
    property: {
      type: 'object',
      description: 'description',
      properties: {
        age: {
          type: 'number',
          description: 'text',
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const objectEditor = new ObjectEditorTO(canvasElement, 'objectName');
    const name = objectEditor.getObjectName();

    expect(name).toHaveTextContent('objectName');
  },
};

export const NestedObjectsName: Story = {
  name: 'Корректно именуются вложенные объекты',
  args: {
    value: { nestedObj: { age: 0 } },
    name: 'mainObject',
    property: {
      type: 'object',
      description: 'description',
      properties: {
        nestedObj: {
          type: 'object',
          description: 'nested object',
          properties: {
            age: {
              type: 'number',
              description: 'age',
            },
          },
        },
      },
    },
  },
  play: async ({ canvasElement }) => {
    const mainObject = new ObjectEditorTO(canvasElement, 'mainObject');
    const mainObjectFieldset = mainObject.getFieldset();
    const nestedObj = new ObjectEditorTO(mainObjectFieldset, 'nestedObj');
    const nestedObjName = nestedObj.getObjectName();

    expect(nestedObjName).toHaveTextContent('nestedObj');
  },
};

export const ValueChanging: Story = {
  name: 'При вводе данных вызывается onChange со всеми данными в property с измененным конкретным свойством',
  args: {
    value: { name: '', nestedObj: { age: 0 } },
    onChange: fn(),
    name: 'mainObject',
    property: {
      type: 'object',
      description: 'description',
      properties: {
        name: {
          type: 'string',
          description: 'your name',
        },
        nestedObj: {
          type: 'object',
          description: 'nested object',
          properties: {
            age: {
              type: 'number',
              description: 'age',
            },
          },
        },
      },
    },
  },
  play: async ({ canvasElement, args }) => {
    const objectEditor = new ObjectEditorTO(canvasElement, 'nestedObj');
    const objectEditorFieldset = objectEditor.getFieldset();
    const numberEditor = new PropEditorTO(objectEditorFieldset, 'prop-editor__age');
    await numberEditor.setValue('229');

    expect(args.onChange).toHaveBeenCalledWith({ name: '', nestedObj: { age: 229 } });
  },
};

export const CorrectDefaultValues: Story = {
  name: 'Корректно передаются все значения из value',
  args: {
    value: { name: 'Thomas', age: 14, additionalInformation: { isBald: true } },
    onChange: fn(),
    name: 'mainObject',
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
  play: async ({ canvasElement }) => {
    const nameEditor = new PropEditorTO(canvasElement, 'prop-editor__name');
    const nameValue = nameEditor.getValue();

    const ageEditor = new PropEditorTO(canvasElement, 'prop-editor__age');
    const ageValue = ageEditor.getValue();

    const isBaldEditor = new PropEditorTO(canvasElement, 'prop-editor__isBald');
    const isBaldValue = isBaldEditor.getValue();

    expect(nameValue).toBe('Thomas');
    expect(ageValue).toBe('14');
    expect(isBaldValue).toBe(true);
  },
};
