import { examplePage } from '@colibrijs/mocks/pages';
import type { IPage } from '@colibrijs/types';

import type { IPagesEndpoint } from './endpoint';

export class MockedPagesEndpoint implements IPagesEndpoint {
  get(): Promise<IPage[]> {
    return Promise.resolve([examplePage]);
  }

  post(): Promise<IPage> {
    return Promise.resolve(examplePage);
  }

  delete(): Promise<IPage> {
    return Promise.resolve(examplePage);
  }
}
