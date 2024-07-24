import { Input, Form } from 'antd';
import { useCallback, type ChangeEvent } from 'react';

import type { BaseProps } from '../types';

export function StringEditor({ onChange, value, property, name, testId }: BaseProps<string>) {
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <Form.Item
      data-type="string"
      layout="vertical"
      data-testid={testId}
      label={<span data-testid={`${testId}__label`}>{name}</span>}
      help={<span data-testid="prop-editor__description">{property.description}</span>}
    >
      <Input
        data-testid="prop-editor__input"
        name={name}
        type="text"
        value={value}
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
