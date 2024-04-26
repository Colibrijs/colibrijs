import { QueryClient, QueryClientProvider, type QueryClientConfig } from '@tanstack/react-query';
import React, { useState, type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  config?: QueryClientConfig;
}>;

export function ReactQueryProvider({ children, config }: Props) {
  const [queryClient] = useState(new QueryClient(config));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
