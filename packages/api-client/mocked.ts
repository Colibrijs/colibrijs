import type { IApiClient } from './api-client';
import { MockedComponentsEndpoint } from './endpoints/components/mocked';
import { MockedPagesEndpoint } from './endpoints/pages/mocked';

type DeepPartialApiClient = Partial<{
  [Endpoint in keyof IApiClient]: Partial<{
    [Method in keyof IApiClient[Endpoint]]: IApiClient[Endpoint][Method];
  }>;
}>;

export class MockedApiClient implements IApiClient {
  components = new MockedComponentsEndpoint();
  pages = new MockedPagesEndpoint();

  override(deepPartialApiClient: DeepPartialApiClient) {
    const endpoints = Object.entries(deepPartialApiClient);

    endpoints.forEach(([endpoint, methods]) => {
      // @ts-expect-error ts не верит, что так можно было
      this[endpoint as keyof IApiClient] = {
        ...this[endpoint as keyof IApiClient],
        ...methods,
      };
    });
  }
}
