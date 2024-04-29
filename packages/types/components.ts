export interface IComponent {
  id: string;
  name: string;
  libraryName: string;
  src: string;
}

export type IComponentConstructorOptions = Omit<IComponent, 'id'>;
