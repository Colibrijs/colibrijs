type StringifiedType<T> = T extends string
  ? 'string'
  : T extends number
    ? 'number'
    : T extends boolean
      ? 'boolean'
      : 'never';

type Properties<T> = {
  [K in keyof T]: {
    type: StringifiedType<T[K]>;
    description: string;
  };
};

export type JsonSchema<T extends Record<string, string>> = {
  $schema: string;
  $id: string;
  title: string;
  description?: string;
  type: 'object';
  properties: Properties<T>;
};
