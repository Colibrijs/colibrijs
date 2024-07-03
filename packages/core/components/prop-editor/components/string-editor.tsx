import { Input, Form } from 'antd';
import { useCallback, type ChangeEvent } from 'react';

import type { BaseProps } from '../types';

export function StringEditor({ onChange, value, property, name }: BaseProps<string>) {
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <Form.Item
      label={<span data-testid="string-editor__label">{name}</span>}
      help={<span data-testid="string-editor__description">{property.description}</span>}
    >
      <Input
        data-testid="string-editor__input"
        name={name}
        type="text"
        value={value}
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
