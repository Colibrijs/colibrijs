export interface IComponent {
  id: string;
  componentName: string;
  libraryName: string;
  src: string;
}

export type IComponentConstructorOptions = Omit<IComponent, 'id'>;
