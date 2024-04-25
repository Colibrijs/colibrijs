import { apiClient, type IApiClient } from '@colibrijs/api-client';
import { createContext, useContext } from 'react';

export const ApiContext = createContext<IApiClient>(apiClient);

export function useApi() {
  return useContext(ApiContext);
}
