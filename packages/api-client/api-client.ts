import { ComponentsEndpoint, type IComponentsEndpoint } from './endpoints/components/endpoint';
import { PagesEndpoint, type IPagesEndpoint } from './endpoints/pages/endpoint';
import { httpClient } from './http-client';

export { NotFoundError } from './errors';

export interface IApiClient {
  components: IComponentsEndpoint;
  pages: IPagesEndpoint;
}

export const apiClient: IApiClient = {
  components: new ComponentsEndpoint(httpClient),
  pages: new PagesEndpoint(httpClient),
};
