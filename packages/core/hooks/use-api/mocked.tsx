import { MockedApiClient } from '@colibrijs/api-client/mocked';
import type { Decorator } from '@storybook/react';

import React, { type ComponentType } from 'react';

import { ApiContext } from './use-api';

type PrepareApiClient = (apiClient: MockedApiClient) => void;

export function withMockedApi(prepare: PrepareApiClient = () => {}): Decorator {
  const mockedApiClient = new MockedApiClient();
  prepare(mockedApiClient);

  function MockedApiDecorator(Story: ComponentType) {
    return (
      <ApiContext.Provider value={mockedApiClient}>
        <Story />
      </ApiContext.Provider>
    );
  }

  MockedApiDecorator.displayName = 'MockedApiDecorator';

  return MockedApiDecorator;
}
