import type { ObjectProperty, PrimitiveType } from '@colibrijs/schema';
import cn from 'classnames';

import { useCallback } from 'react';

import styles from './layout.module.css';
import { PrimitiveEditor } from './primitive-editor';
import type { BaseProps } from '../types';

type ChangeHandler<T> = (value: T) => void;
type Props<T extends object> = BaseProps<T> & { property: ObjectProperty<T> };

export function ObjectEditor<T extends object>({
  property,
  onChange,
  value,
  name,
  testId = 'prop-editor',
}: Props<T>) {
  const getChangeHandler = useCallback(
    <K extends keyof T>(propName: K) => {
      return (newValue: T[K]) => {
        onChange({ ...value, [propName]: newValue });
      };
    },
    [onChange, value]
  );

  const properties = Object.keys(property.properties) as (keyof T)[];

  return (
    <fieldset className={cn(styles.fieldset)}>
      <legend className={cn(styles.legend)}>{name}</legend>
      {properties.map((prop) =>
        property.properties[prop].type === 'object' ? (
          <ObjectEditor
            key={prop.toString()}
            name={prop.toString()}
            property={property.properties[prop]}
            value={value[prop] as object}
            testId={testId}
            onChange={getChangeHandler(prop) as ChangeHandler<object>}
          />
        ) : (
          <PrimitiveEditor
            key={prop.toString()}
            name={prop.toString()}
            property={property.properties[prop]}
            value={value[prop] as PrimitiveType}
            testId={testId}
            onChange={getChangeHandler(prop) as ChangeHandler<PrimitiveType>}
          />
        )
      )}
    </fieldset>
  );
}
