export type SchemaValues = string | number | boolean | object;

type StringifiedType<T> = T extends string
  ? 'string'
  : T extends number
    ? 'number'
    : T extends boolean
      ? 'boolean'
      : never;

type PrimitiveProperties = {
  string: {
    type: 'string';
    description: string;
  };
  number: {
    type: 'number';
    description: string;
  };
  boolean: {
    type: 'boolean';
    description: string;
  };
};

type ObjectProperty<T> = {
  type: 'object';
  description: string;
  properties: {
    [K in keyof T]: Property<T[K]>;
  };
};

export type Property<T> = T extends object
  ? ObjectProperty<T>
  : PrimitiveProperties[StringifiedType<T>];

export type JsonSchema<T extends object> = {
  $schema: string;
  $id: string;
  title: string;
  description?: string;
  type: 'object';
  properties: {
    [K in keyof T]: Property<T[K]>;
  };
};
