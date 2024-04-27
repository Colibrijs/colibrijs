import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';

import type { HttpClient } from '../../types';

export class ComponentsEndpoint {
  constructor(private readonly httpClient: HttpClient) {}

  async get(): Promise<IComponent[]> {
    const response = await this.httpClient.get('/components');
    return response.data;
  }

  async post(constructorOptions: IComponentConstructorOptions): Promise<IComponent> {
    const response = await this.httpClient.post('/components', constructorOptions);
    return response.data;
  }

  async delete(componentId: string): Promise<IComponent> {
    const response = await this.httpClient.delete(`/components/${componentId}`);
    return response.data;
  }
}

// Странно очень, что приватное поле класса попадает в тип
export type IComponentsEndpoint = Omit<ComponentsEndpoint, 'httpClient'>;
