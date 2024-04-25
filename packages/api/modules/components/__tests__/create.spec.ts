import { describe, expect, it } from '@jest/globals';

import { createMockedComponentsRepository } from './mocked-components-repository';
import { defaultConstructorOptions, defaultComponent } from './testing-data';
import { ComponentsService } from '../components.service';

describe(ComponentsService, () => {
  describe(ComponentsService.prototype.create.name, () => {
    it('создаёт экземпляр компонента и сохраняет его в репозиторий', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedComponentsRepository({
        create: defaultComponent,
        save: defaultComponent,
      });

      const componentsService = new ComponentsService(mockedRepository);
      await componentsService.create(defaultConstructorOptions);

      expect(mockedRepository.create).toHaveBeenCalledWith(defaultConstructorOptions);
      expect(mockedRepository.save).toHaveBeenCalledWith(defaultComponent);
    });
  });
});
