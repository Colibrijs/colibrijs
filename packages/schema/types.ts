export type SchemaValues = string | number | boolean | object;
export type PrimitiveType = string | number | boolean;

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

export type ObjectProperty<T> = {
  type: 'object';
  description: string;
  properties: {
    // eslint-disable-next-line no-use-before-define -- по-другому никак
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
