import { ComponentsEndpoint, type IComponentsEndpoint } from './endpoints/components/endpoint';
import { httpClient } from './http-client';

export interface IApiClient {
  components: IComponentsEndpoint;
}

export const apiClient: IApiClient = {
  components: new ComponentsEndpoint(httpClient),
};
