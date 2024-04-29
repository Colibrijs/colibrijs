import { RouterContext, ReactQueryProvider } from '@colibrijs/core';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';

import '@colibrijs/core/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ReactQueryProvider>
      <RouterContext.Provider value={router}>
        <Component {...pageProps} />
      </RouterContext.Provider>
    </ReactQueryProvider>
  );
}
