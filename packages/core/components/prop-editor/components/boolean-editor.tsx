import { Form, Switch } from 'antd';
import { useCallback } from 'react';

import type { BaseProps } from '../types';

export function BooleanEditor({ onChange, value, property, name, testId }: BaseProps<boolean>) {
  const changeHandler = useCallback(
    (checked: boolean) => {
      onChange(checked);
    },
    [onChange]
  );

  return (
    <Form.Item
      data-testid={testId}
      label={<span data-testid="prop-editor__label">{name}</span>}
      help={<span data-testid="prop-editor__description">{property.description}</span>}
    >
      <Switch
        defaultChecked={value}
        data-testid="prop-editor__switcher"
        value={value}
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
