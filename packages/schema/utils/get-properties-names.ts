import type { ObjectProperty } from '../types';

export function getPropertiesNames<T extends object>(property: ObjectProperty<T>): (keyof T)[] {
  return Object.keys(property.properties) as (keyof T)[];
}
