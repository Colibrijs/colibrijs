type StringifiedType<T> = T extends string
  ? 'string'
  : T extends number
    ? 'number'
    : T extends boolean
      ? 'boolean'
      : 'never';

export type Property<T> = {
  type: StringifiedType<T>;
  description: string;
};

type Properties<T> = {
  [K in keyof T]: Property<T[K]>;
};

export type SchemaValues = string | number | boolean;

export type JsonSchema<T extends Record<string, SchemaValues>> = {
  $schema: string;
  $id: string;
  title: string;
  description?: string;
  type: 'object';
  properties: Properties<T>;
};
