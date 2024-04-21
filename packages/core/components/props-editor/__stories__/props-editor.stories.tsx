import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import React, { useState, useCallback } from 'react';

import schema from './schema.json';
import { PropsEditor, type Props } from '../props-editor';

export type PropsEditorMeta = Meta<typeof PropsEditor>;
export type Story = StoryObj<typeof PropsEditor>;

const styles = { maxWidth: '450px' };

export default {
  component: PropsEditor,
  title: 'PropsEditor',
  args: {
    onChange: fn(),
    schema: JSON.stringify(schema, null, 2),
    value: {
      name: 'Vityavale',
      surname: 'Radomoy',
    },
  },
  decorators: [
    (Story) => (
      <div style={styles}>
        <Story />
      </div>
    ),
  ],
} satisfies PropsEditorMeta;

export function Default<T extends Record<string, string>>({ value, schema, onChange }: Props<T>) {
  const [currentValue, setCurrentValue] = useState(value);
  const changeHandler = useCallback(
    (newValue: T) => {
      onChange(newValue);
      setCurrentValue(newValue);
    },
    [onChange]
  );

  return <PropsEditor value={currentValue} schema={schema} onChange={changeHandler} />;
}
