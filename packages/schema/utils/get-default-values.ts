import { getPropertiesNames } from './get-properties-names';
import type { ObjectProperty } from '../types';

export function getDefaultValues<T extends object>(schema: ObjectProperty<T>): T {
  const defaultValues = getPropertiesValues(schema);
  return defaultValues as T;
}

function getPropertiesValues<T extends object>(property: ObjectProperty<T>): T {
  const keys = getPropertiesNames(property);
  return keys.reduce((obj, key) => {
    if (property.properties[key].type === 'number') (obj[key] as number) = 0;
    if (property.properties[key].type === 'string') (obj[key] as string) = '';
    if (property.properties[key].type === 'boolean') (obj[key] as boolean) = false;
    if (property.properties[key].type === 'object')
      (obj[key] as object) = getPropertiesValues(
        property.properties[key] as ObjectProperty<object>
      );
    return obj;
  }, {} as T);
}
