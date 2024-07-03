import { InputNumber, Form } from 'antd';
import { useCallback } from 'react';

import type { BaseProps } from '../types';

export function NumberEditor({ onChange, value, property, name }: BaseProps<number>) {
  const changeHandler = useCallback(
    (value: number | string | null) => {
      const numberValue = Number(value);
      onChange(numberValue);
    },
    [onChange]
  );

  return (
    <Form.Item
      label={<span data-testid="number-editor__label">{name}</span>}
      help={<span data-testid="number-editor__description">{property.description}</span>}
    >
      <InputNumber
        name={name}
        value={value}
        data-testid="number-editor__input"
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
