import type { IApiClient } from './api-client';
import { MockedComponentsEndpoint } from './endpoints/components/mocked';

class MockedApiClient implements IApiClient {
  components = new MockedComponentsEndpoint();

  overrideResponse<Endpoint extends keyof IApiClient, Method extends keyof IApiClient[Endpoint]>(
    endpoint: Endpoint,
    method: Method,
    mock: IApiClient[Endpoint][Method]
  ) {
    // @ts-expect-error ts не верит что можно вот так переопределить метод эндпоинта
    this[endpoint][method] = mock;
  }
}

export const mockedApiClient = new MockedApiClient();

export type { MockedApiClient };
