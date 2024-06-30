import { type Property } from '@colibrijs/schema';
import { Input, Form } from 'antd';
import { useCallback, type ChangeEvent } from 'react';

export interface Props {
  /* Имя инпута */
  name: string;

  /** Редактируемое свойство */
  property: Property<string>;

  /** Значение по умолчанию */
  value: string;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: string) => void;
}

export function StringEditor({ onChange, value, property, name }: Props) {
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <Form.Item className="string-editor" data-testid="string-editor">
      <label className="string-editor__label" htmlFor={name}>
        {property.description}
      </label>
      <Input
        className="string-editor__input"
        name={name}
        type="text"
        value={value}
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
