import type { SchemaValues } from '@colibrijs/schema';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { useState, useCallback } from 'react';

import { SidebarDecorator } from '../../layout/sidebar-decorator';
import { PropEditor } from '../prop-editor';
import type { BaseProps } from '../types';

export type PropEditorMeta = Meta<typeof PropEditor<SchemaValues>>;
export type Story = StoryObj<typeof PropEditor<SchemaValues>>;

export default {
  component: Default,
  title: 'PropEditor',
  args: {
    onChange: fn(),
    property: {
      type: 'string',
      description: 'description',
    },
    value: 'some valuev',
    name: 'name',
    testId: 'prop-editor',
  },
  decorators: [SidebarDecorator],
} satisfies PropEditorMeta;

export function Default<T>({
  name,
  value,
  property,
  testId = 'prop-editor',
  onChange,
}: BaseProps<T>) {
  const [currentValue, setCurrentValue] = useState(value);
  const changeHandler = useCallback(
    (newValue: T) => {
      onChange(newValue);
      setCurrentValue(newValue);
    },
    [onChange]
  );

  return (
    <PropEditor
      name={name}
      testId={testId}
      value={currentValue}
      property={property}
      onChange={changeHandler}
    />
  );
}

export const ObjectExampleStory: Story = {
  render: function <T>(args: BaseProps<T>) {
    const [currentValue, setCurrentValue] = useState(args.value);
    const changeHandler = useCallback(
      (newValue: T) => {
        args.onChange(newValue);
        setCurrentValue(newValue);
      },
      [args]
    );

    return <PropEditor {...args} value={currentValue} onChange={changeHandler} />;
  },
  args: {
    name: 'objectName',
    value: { age: 228, name: 'kek', obj: { isBald: true } },
    property: {
      type: 'object',
      description: 'kek',
      properties: {
        age: {
          type: 'number',
          description: 'its a number',
        },
        name: {
          type: 'string',
          description: 'its a string',
        },
        obj: {
          type: 'object',
          description: 'its an object',
          properties: {
            isBald: {
              type: 'boolean',
              description: 'its a boolean',
            },
          },
        },
      },
    },
    onChange: fn(),
  },
};
