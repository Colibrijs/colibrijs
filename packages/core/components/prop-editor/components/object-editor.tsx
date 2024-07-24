import { getPropertiesNames, type ObjectProperty, type PrimitiveType } from '@colibrijs/schema';
import cn from 'classnames';

import { useCallback } from 'react';

import styles from './object-editor.module.css';
import { PrimitiveEditor } from './primitive-editor';
import type { BaseProps } from '../types';

type ChangeHandler<T> = (value: T) => void;
type Props<T extends object> = BaseProps<T> & { property: ObjectProperty<T> };

export function ObjectEditor<T extends object>({
  property,
  onChange,
  value,
  name,
  testId,
}: Props<T>) {
  const getChangeHandler = useCallback(
    <K extends keyof T>(propName: K) => {
      return (newValue: T[K]) => {
        onChange({ ...value, [propName]: newValue });
      };
    },
    [onChange, value]
  );

  const properties = getPropertiesNames(property);

  return (
    <fieldset className={cn(styles.fieldset)} data-testid={testId} data-name={name}>
      <legend className={cn(styles.legend)} data-testid={`${testId}__label`}>
        {name}
      </legend>
      {properties.map((prop) =>
        property.properties[prop].type === 'object' ? (
          <ObjectEditor
            key={prop.toString()}
            name={prop.toString()}
            property={property.properties[prop]}
            value={value[prop] as object}
            testId={`${testId}__${prop.toString()}`}
            onChange={getChangeHandler(prop) as ChangeHandler<object>}
          />
        ) : (
          <PrimitiveEditor
            key={prop.toString()}
            name={prop.toString()}
            property={property.properties[prop]}
            value={value[prop] as PrimitiveType}
            testId={`${testId}__${prop.toString()}`}
            onChange={getChangeHandler(prop) as ChangeHandler<PrimitiveType>}
          />
        )
      )}
    </fieldset>
  );
}
