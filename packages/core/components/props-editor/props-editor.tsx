import {
  type JsonSchema,
  getPropertiesNames,
  type SchemaValues,
  type Property,
} from '@colibrijs/schema';
import { Form } from 'antd';

import { useCallback } from 'react';

import { PropEditor } from '../prop-editor/prop-editor';

export interface Props<T extends Record<string, SchemaValues>> {
  /** JSON схема, которая описывает каким должен быть объект */
  schema: JsonSchema<T>;

  /** Объект со значением по умолчанию */
  value: T;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: T) => void;
}

export function PropsEditor<T extends Record<string, SchemaValues>>({
  schema,
  onChange,
  value,
}: Props<T>) {
  const propertiesNames = getPropertiesNames(schema);

  const changeHandler = useCallback(
    <K extends keyof T>(key: K) =>
      (newValue: SchemaValues) => {
        onChange({ ...value, [key]: newValue });
      },
    [onChange, value]
  );

  const getValue = useCallback(
    (propName: keyof T) => {
      return value[propName];
    },
    [value]
  );

  const getProperty = useCallback(
    (propName: keyof T): Property<SchemaValues> => {
      return schema.properties[propName];
    },
    [schema.properties]
  );

  return (
    <Form layout="vertical">
      {propertiesNames.map((propName) => (
        <PropEditor
          property={getProperty(propName)}
          key={propName}
          name={propName}
          value={getValue(propName)}
          testId={`props-editor__${propName}`}
          onChange={changeHandler(propName)}
        />
      ))}
    </Form>
  );
}
