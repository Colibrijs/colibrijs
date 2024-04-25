import { exampleComponent } from '@colibrijs/mocks/components';
import type { IComponent } from '@colibrijs/types';

import type { IComponentsEndpoint } from './endpoint';

export class MockedComponentsEndpoint implements IComponentsEndpoint {
  get(): Promise<IComponent[]> {
    return Promise.resolve([exampleComponent]);
  }

  post(): Promise<IComponent> {
    return Promise.resolve(exampleComponent);
  }
}
