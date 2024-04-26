import type { Decorator } from '@storybook/react';
import type { QueryClientConfig } from '@tanstack/react-query';
import React, { useMemo, type ComponentType } from 'react';

import { ReactQueryProvider } from './react-query-provider';

export function withReactQueryDecorator(): Decorator {
  function ReactQueryDecorator(Story: ComponentType) {
    const config = useMemo(
      (): QueryClientConfig => ({
        defaultOptions: {
          // Для теста отключаем ретраи, потому что оно нам и нафиг не надо
          queries: { retry: 0 },
          mutations: { retry: 0 },
        },
      }),
      []
    );

    return (
      <ReactQueryProvider config={config}>
        <Story />
      </ReactQueryProvider>
    );
  }

  ReactQueryDecorator.displayName = 'ReactQueryDecorator';

  return ReactQueryDecorator;
}
