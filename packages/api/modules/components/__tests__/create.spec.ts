import { exampleComponent, exampleComponentConstructorOptions } from '@colibrijs/mocks/components';
import { describe, expect, it } from '@jest/globals';

import { createMockedComponentsRepository } from './mocked-components-repository';
import { ComponentsService } from '../components.service';

describe(ComponentsService, () => {
  describe(ComponentsService.prototype.create.name, () => {
    it('создаёт экземпляр компонента и сохраняет его в репозиторий', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedComponentsRepository({
        create: exampleComponent,
        save: exampleComponent,
      });

      const componentsService = new ComponentsService(mockedRepository);
      await componentsService.create(exampleComponentConstructorOptions);

      expect(mockedRepository.create).toHaveBeenCalledWith(exampleComponentConstructorOptions);
      expect(mockedRepository.save).toHaveBeenCalledWith(exampleComponent);
    });
  });
});
