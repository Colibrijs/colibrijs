import type { JsonSchema } from '@colibrijs/types';
import { Form, Input } from 'antd';
import React, { useCallback, type ChangeEvent } from 'react';

import { getPropertiesNames } from './utils/get-properties-names';

export interface Props<T> {
  /** JSON схема, которая описывает каким должен быть объект */
  schema: JsonSchema<T>;

  /** Объект со значением по умолчанию */
  value: T;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: T) => void;
}

export function PropsEditor<T extends Record<string, string>>({
  schema,
  onChange,
  value,
}: Props<T>) {
  const propertiesNames = getPropertiesNames(schema);

  const getChangeHandler = useCallback(
    <K extends keyof T>(key: K) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange({ ...value, [key]: newValue });
      },
    [onChange, value]
  );

  return (
    <Form layout="vertical">
      {propertiesNames.map((propName) => (
        <Form.Item key={propName} label={propName}>
          <Input value={value[propName]} onChange={getChangeHandler(propName)} />
        </Form.Item>
      ))}
    </Form>
  );
}
