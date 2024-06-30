import { type Property } from '@colibrijs/schema';
import { Input, Form } from 'antd';
import { useCallback, type ChangeEvent } from 'react';

export interface Props {
  /* Имя инпута */
  name: string;

  /** Редактируемое свойство */
  property: Property<number>;

  /** Значение по умолчанию */
  value: number;

  /** Функция, которая будет вызвана, когда пропсы поменяются */
  onChange: (value: number) => void;
}

export function NumberEditor({ onChange, value, property, name }: Props) {
  const changeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = +event.target.value;
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <Form.Item className="number-editor" data-testid="number-editor">
      <label className="number-editor__label" htmlFor={name}>
        {property.description}
      </label>
      <Input
        name={name}
        className="number-editor__input"
        type="number"
        value={value}
        onChange={changeHandler}
      />
    </Form.Item>
  );
}
