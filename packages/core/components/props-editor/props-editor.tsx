import { type JsonSchema, getPropertiesNames, type Property } from '@colibrijs/schema';
import { Form } from 'antd';

import { useCallback } from 'react';

import { PropEditor } from '../prop-editor/prop-editor';

export interface Props<T extends object> {
  /** JSON схема, которая описывает каким должен быть объект */
  schema: JsonSchema<T>;

  /** Объект со значением по умолчанию */
  value: T;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: T) => void;
}

export function PropsEditor<T extends object>({ schema, onChange, value }: Props<T>) {
  const propertiesNames = getPropertiesNames(schema);

  const changeHandler = useCallback(
    <K extends keyof T>(key: K) =>
      (newValue: T[K]) => {
        onChange({ ...value, [key]: newValue });
      },
    [onChange, value]
  );

  const getValue = useCallback(
    <K extends keyof T>(propName: K): T[K] => {
      return value[propName];
    },
    [value]
  );

  const getProperty = useCallback(
    <K extends keyof T>(propName: K): Property<T[K]> => {
      return schema.properties[propName];
    },
    [schema.properties]
  );

  return (
    <div data-testid="props-editor">
      <Form layout="vertical">
        {propertiesNames.map((propName) => (
          <PropEditor
            property={getProperty(propName)}
            key={propName.toString()}
            name={propName.toString()}
            value={getValue(propName)}
            testId={`props-editor__${propName.toString()}`}
            onChange={changeHandler(propName)}
          />
        ))}
      </Form>
    </div>
  );
}
