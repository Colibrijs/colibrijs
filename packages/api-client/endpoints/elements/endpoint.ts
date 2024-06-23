import type { IElement, IElementConstructorOptions } from '@colibrijs/types';

import type { HttpClient } from '../../types';

export class ElementsEndpoint {
  constructor(private readonly httpClient: HttpClient) {}

  async get(): Promise<IElement[]> {
    const response = await this.httpClient.get('/elements');
    return response.data;
  }

  async post(elementData: IElementConstructorOptions): Promise<IElement> {
    const response = await this.httpClient.post('/elements', elementData);
    return response.data;
  }

  async delete(elementsIds: string[]): Promise<IElement[]> {
    const response = await this.httpClient.delete('/elements', { data: elementsIds });
    return response.data;
  }
}

// Странно очень, что приватное поле класса попадает в тип
export type IElementsEndpoint = Omit<ElementsEndpoint, 'httpClient'>;
