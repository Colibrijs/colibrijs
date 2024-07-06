import { type SchemaValues, type Property } from '@colibrijs/schema';

import { NumberEditor } from './components/number-editor';
import { StringEditor } from './components/string-editor';
import type { BaseProps } from './types';

type ChangeHandler<T> = (value: T) => void;

export function PropEditor<T extends SchemaValues>({
  property,
  onChange,
  value,
  name,
  testId,
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
    </>
  );
}
