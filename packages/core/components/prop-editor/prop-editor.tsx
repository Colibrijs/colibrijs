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
}: BaseProps<T>) {
  return (
    <>
      {property.type === 'string' && (
        <StringEditor
          name={name}
          property={property as Property<string>}
          value={value as string}
          data-testid="props-editor__input"
          onChange={onChange as ChangeHandler<string>}
        />
      )}
      {property.type === 'number' && (
        <NumberEditor
          name={name}
          property={property as Property<number>}
          value={value as number}
          data-testid="props-editor__input"
          onChange={onChange as ChangeHandler<number>}
        />
      )}
    </>
  );
}
