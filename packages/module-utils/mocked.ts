import type { JsonSchema } from '@colibrijs/schema';
import fetchMock from 'fetch-mock';

/**
 * Мокает запрос для загрузки схемы
 */
export function mockLoadSchemaRequest<T extends object>(response: JsonSchema<T>) {
  return fetchMock.get('*', response);
}

export function resetLoadSchemaRequestMock() {
  fetchMock.reset();
}
