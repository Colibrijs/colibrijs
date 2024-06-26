import type { IElement, IElementConstructorOptions, IElementEditOptions } from '@colibrijs/types';

import type { HttpClient } from '../../types';

export class ElementsEndpoint {
  constructor(private readonly httpClient: HttpClient) {}

  /**
   * Ищет и возвращает контент определённой страницы
   * @param route - роут для которого нужно найти контент. Если указать /about, будет искать
   *                элементы, которые относятся к странице /about
   * @returns
   */
  async get(route: string): Promise<IElement[]> {
    const response = await this.httpClient.get('/elements', {
      params: { route },
    });

    return response.data;
  }

  async post(elementData: IElementConstructorOptions): Promise<IElement> {
    const response = await this.httpClient.post('/elements', elementData);
    return response.data;
  }

  async patch(elementId: string, newProps: IElementEditOptions): Promise<IElement> {
    const response = await this.httpClient.patch(`/elements/${elementId}`, newProps);
    return response.data;
  }

  async delete(elementId: string): Promise<IElement> {
    const response = await this.httpClient.delete(`/elements/${elementId}`);
    return response.data;
  }
}

// Странно очень, что приватное поле класса попадает в тип
export type IElementsEndpoint = Omit<ElementsEndpoint, 'httpClient'>;
