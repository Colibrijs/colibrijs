import type { SchemaValues, Property, PrimitiveType } from '@colibrijs/schema';

import { ObjectEditor } from './components/object-editor';
import { PrimitiveEditor } from './components/primitive-editor';
import type { BaseProps } from './types';

type ChangeHandler<T> = (value: T) => void;

export function PropEditor<T>({
  property,
  onChange,
  value,
  name,
  testId = 'prop-editor',
}: BaseProps<T>) {
  const isPrimitive =
    property.type === 'string' || property.type === 'number' || property.type === 'boolean';

  return (
    <>
      {isPrimitive && (
        <PrimitiveEditor
          name={'loh'}
          property={property as Property<PrimitiveType>}
          value={value as PrimitiveType}
          testId={testId}
          onChange={onChange as ChangeHandler<PrimitiveType>}
        />
      )}
      {!isPrimitive && (
        <ObjectEditor
          name={name}
          property={property as Property<object>}
          value={value as object}
          testId={testId}
          onChange={onChange as ChangeHandler<SchemaValues>}
        />
      )}
    </>
  );
}
