import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';

export const exampleComponentConstructorOptions: IComponentConstructorOptions = {
  componentName: 'Example',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const exampleComponent: IComponent = {
  ...exampleComponentConstructorOptions,
  id: '1',
};
