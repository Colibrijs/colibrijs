import type { SchemaValues, Property } from './types';

function isPropertyString(property: Property<SchemaValues>): property is Property<string> {
  return property.type === 'string';
}

function isPropertyNumber(property: Property<SchemaValues>): property is Property<number> {
  return property.type === 'number';
}

export const typeGuards = { isPropertyNumber, isPropertyString };
