import type { SchemaValues } from '@colibrijs/schema';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { useState, useCallback } from 'react';

import { SidebarDecorator } from '../../layout/sidebar-decorator';
import { PropEditor } from '../prop-editor';
import type { BaseProps } from '../types';

export type PropEditorMeta = Meta<typeof PropEditor>;
export type Story = StoryObj<typeof PropEditor>;

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
  },
  decorators: [SidebarDecorator],
} satisfies PropEditorMeta;

export function Default<T extends SchemaValues>({ name, value, property, onChange }: BaseProps<T>) {
  const [currentValue, setCurrentValue] = useState(value);
  const changeHandler = useCallback(
    (newValue: T) => {
      onChange(newValue);
      setCurrentValue(newValue);
    },
    [onChange]
  );

  return (
    <PropEditor name={name} value={currentValue} property={property} onChange={changeHandler} />
  );
}
