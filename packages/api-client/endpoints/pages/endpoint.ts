import type { IPage, IPageConstructorOptions } from '@colibrijs/types';

import type { HttpClient } from '../../types';

export class PagesEndpoint {
  constructor(private readonly httpClient: HttpClient) {}

  async get(): Promise<IPage[]> {
    const response = await this.httpClient.get('/pages');
    return response.data;
  }

  async post(options: IPageConstructorOptions): Promise<IPage> {
    const response = await this.httpClient.post('/pages', options);
    return response.data;
  }

  async delete(pageId: string): Promise<IPage> {
    const response = await this.httpClient.delete(`/pages/${pageId}`);
    return response.data;
  }
}

// Странно очень, что приватное поле класса попадает в тип
export type IPagesEndpoint = Omit<PagesEndpoint, 'httpClient'>;
