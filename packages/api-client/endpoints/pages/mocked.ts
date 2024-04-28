import { examplePage, manyPages } from '@colibrijs/mocks/pages';
import type { IPage } from '@colibrijs/types';

import type { IPagesEndpoint } from './endpoint';

export class MockedPagesEndpoint implements IPagesEndpoint {
  get(): Promise<IPage[]> {
    return Promise.resolve(manyPages);
  }

  post(): Promise<IPage> {
    return Promise.resolve(examplePage);
  }

  delete(): Promise<IPage> {
    return Promise.resolve(examplePage);
  }
}
