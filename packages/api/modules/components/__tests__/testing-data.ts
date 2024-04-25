import type { ComponentDTO, ComponentConstructorOptions } from '../component.entity';

export const defaultConstructorOptions: ComponentConstructorOptions = {
  componentName: 'Example',
  libraryName: '@colibrijs/example',
  src: 'https://colibrijs.github.io/colibrijs/main/example',
};

export const defaultComponent: ComponentDTO = { ...defaultConstructorOptions, id: '1' };
