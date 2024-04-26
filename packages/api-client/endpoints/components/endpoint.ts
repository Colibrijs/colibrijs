import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';

import type { HttpClient } from '../../types';

export class ComponentsEndpoint {
  constructor(private readonly httpClient: HttpClient) {}

  get(): Promise<IComponent[]> {
    return this.httpClient.get('/components');
  }

  post(constructorOptions: IComponentConstructorOptions): Promise<IComponent> {
    return this.httpClient.post('/components', constructorOptions);
  }

  delete(componentId: string): Promise<IComponent> {
    return this.httpClient.delete(`/components/${componentId}`);
  }
}

// Странно очень, что приватное поле класса попадает в тип
export type IComponentsEndpoint = Omit<ComponentsEndpoint, 'httpClient'>;
