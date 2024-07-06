import { InputNumber, Form } from 'antd';
import { useCallback } from 'react';

import type { BaseProps } from '../types';

export function NumberEditor({ onChange, value, property, name, testId }: BaseProps<number>) {
  const changeHandler = useCallback(
    (value: number | string | null) => {
      const numberValue = Number(value);
      onChange(numberValue);
    },
    [onChange]
  );

  return (
    <Form.Item
      data-testid={testId}
      label={<span data-testid="prop-editor__label">{name}</span>}
      help={<span data-testid="prop-editor__description">{property.description}</span>}
    >
      <InputNumber
        name={name}
        value={value}
        type="number"
        data-testid="prop-editor__input"
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
