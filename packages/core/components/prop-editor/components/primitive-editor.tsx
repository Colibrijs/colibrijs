import type { Property, PrimitiveType } from '@colibrijs/schema';

import { BooleanEditor } from './boolean-editor';
import { NumberEditor } from './number-editor';
import { StringEditor } from './string-editor';
import type { BaseProps } from '../types';

type ChangeHandler<T> = (value: T) => void;

export function PrimitiveEditor<T extends PrimitiveType>({
  property,
  onChange,
  value,
  name,
  testId = 'prop-editor',
}: BaseProps<T>) {
  return (
    <>
      {property.type === 'string' && (
        <StringEditor
          name={name}
          property={property as Property<string>}
          value={value as string}
          testId={testId}
          onChange={onChange as ChangeHandler<string>}
        />
      )}
      {property.type === 'number' && (
        <NumberEditor
          name={name}
          property={property as Property<number>}
          value={value as number}
          testId={testId}
          onChange={onChange as ChangeHandler<number>}
        />
      )}
      {property.type === 'boolean' && (
        <BooleanEditor
          name={name}
          property={property as Property<boolean>}
          value={value as boolean}
          testId={testId}
          onChange={onChange as ChangeHandler<boolean>}
        />
      )}
    </>
  );
}
