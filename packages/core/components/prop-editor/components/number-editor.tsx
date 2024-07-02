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
    <Form.Item label={name} help={property.description}>
      <InputNumber name={name} value={value} onChange={changeHandler} />
    </Form.Item>
  );
}
