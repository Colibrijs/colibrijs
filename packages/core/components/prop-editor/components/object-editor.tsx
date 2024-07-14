import { Form } from 'antd';
import { useCallback } from 'react';

import { PropEditor } from '../prop-editor';

import type { BaseProps } from '../types';

export function ObjectEditor({ onChange, value, property, name, testId }: BaseProps<object>) {
  const changeHandler = useCallback(
    (value: number | string | null) => {
      // const numberValue = Number(value);
      onChange({ value });
    },
    [onChange]
  );

  const propNames = Object.keys(property.properties);

  return propNames.map((propName) => (
    <Form.Item
      key={propName}
      data-type="number"
      data-testid={testId}
      label={<span data-testid="prop-editor__label">{propName}</span>}
      help={<span data-testid="prop-editor__description">{property.description}</span>}
    >
      <PropEditor
        name={name}
        value={value}
        type="number"
        data-testid="prop-editor__input"
        onChange={changeHandler}
      />
    </Form.Item>
  ));
}
