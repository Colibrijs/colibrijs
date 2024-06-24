import { type JsonSchema, getPropertiesNames, SchemaValues } from '@colibrijs/schema';
import { Form, Input } from 'antd';
import { useCallback, type ChangeEvent } from 'react';

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

  const getChangeHandler = useCallback(
    <K extends keyof T>(key: K) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange({ ...value, [key]: newValue });
      },
    [onChange, value]
  );

  function getType(propName: string) {
    return schema.properties[propName]?.type || 'string'; // прокомментируй это. Не даёт мне без вопросика писать
  }

  return (
    <Form layout="vertical">
      {propertiesNames.map((propName) => (
        <Form.Item
          key={propName}
          label={<span data-testid="props-editor__label">{propName}</span>}
          data-testid="props-editor__item"
        >
          <Input
            value={value[propName]}
            type={getType(propName)}
            data-testid="props-editor__input"
            onChange={getChangeHandler(propName)}
          />
        </Form.Item>
      ))}
    </Form>
  );
}
