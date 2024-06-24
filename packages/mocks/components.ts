import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';

export const exampleComponentConstructorOptions: IComponentConstructorOptions = {
  name: 'Example',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const exampleComponent: IComponent = {
  ...exampleComponentConstructorOptions,
  id: '1',
};

export const textComponent: IComponent = {
  id: '2',
  name: 'Text',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const imageComponent: IComponent = {
  id: '3',
  name: 'Image',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};
