import { ComponentsEndpoint, type IComponentsEndpoint } from './endpoints/components/endpoint';
import { ElementsEndpoint, type IElementsEndpoint } from './endpoints/elements/endpoint';
import { PagesEndpoint, type IPagesEndpoint } from './endpoints/pages/endpoint';
import { httpClient } from './http-client';

export { NotFoundError } from './errors';

export interface IApiClient {
  components: IComponentsEndpoint;
  elements: IElementsEndpoint;
  pages: IPagesEndpoint;
}

export const apiClient: IApiClient = {
  components: new ComponentsEndpoint(httpClient),
  elements: new ElementsEndpoint(httpClient),
  pages: new PagesEndpoint(httpClient),
};
