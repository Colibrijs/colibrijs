import type { JsonSchema } from '@colibrijs/schema';
import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';

import type { ExampleProps, ImageProps, TextProps } from './types';

export const exampleComponentConstructorOptions: IComponentConstructorOptions = {
  name: 'Example',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const exampleComponent: IComponent = {
  ...exampleComponentConstructorOptions,
  id: '1',
};

export const exampleComponentSchema: JsonSchema<ExampleProps> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'Example',
  title: 'ExampleProps',
  type: 'object',
  properties: {
    title: {
      description: 'Заголовок',
      type: 'string',
    },
    text: {
      description: 'Текст',
      type: 'string',
    },
  },
};

export const textComponent: IComponent = {
  id: '2',
  name: 'Text',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const textComponentSchema: JsonSchema<TextProps> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'Text',
  title: 'TextProps',
  type: 'object',
  properties: {
    text: {
      description: 'Текст',
      type: 'string',
    },
  },
};

export const imageComponent: IComponent = {
  id: '3',
  name: 'Image',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const imageComponentSchema: JsonSchema<ImageProps> = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  $id: 'Image',
  title: 'ImageProps',
  type: 'object',
  properties: {
    alt: {
      description: 'Описание картинки',
      type: 'string',
    },
    src: {
      description: 'Ссылка на картинку',
      type: 'string',
    },
  },
};
