import { exampleElements, exampleElementConstructorOptions } from '@colibrijs/mocks/elements';
import { describe, expect, it } from '@jest/globals';

import { createMockedElementsRepository } from './mocked-elements-repository';
import { ElementsService } from '../elements.service';

describe(ElementsService, () => {
  describe(ElementsService.prototype.create.name, () => {
    it('создаёт экземпляры элементов и сохраняет их в репозиторий', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedElementsRepository({
        create: exampleElements,
        save: exampleElements,
      });

      const elementsService = new ElementsService(mockedRepository);
      await elementsService.create([exampleElementConstructorOptions]);

      expect(mockedRepository.create).toHaveBeenCalledWith([exampleElementConstructorOptions]);
      expect(mockedRepository.save).toHaveBeenCalledWith(exampleElements);
    });
  });
});
