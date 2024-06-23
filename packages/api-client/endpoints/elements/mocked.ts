import { exampleElement, exampleElements } from '@colibrijs/mocks/elements';
import type { IElement } from '@colibrijs/types';

import type { IElementsEndpoint } from './endpoint';

export class MockedElementsEndpoint implements IElementsEndpoint {
  get(): Promise<IElement[]> {
    return Promise.resolve(exampleElements);
  }

  post(): Promise<IElement> {
    return Promise.resolve(exampleElement);
  }

  delete(): Promise<IElement[]> {
    return Promise.resolve(exampleElements);
  }
}
