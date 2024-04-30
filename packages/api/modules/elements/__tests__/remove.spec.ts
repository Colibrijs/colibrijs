import { exampleElements } from '@colibrijs/mocks/elements';
import { describe, expect, it } from '@jest/globals';
import { In } from 'typeorm';

import { createMockedElementsRepository } from './mocked-elements-repository';
import { ElementsService } from '../elements.service';

describe(ElementsService, () => {
  describe(ElementsService.prototype.remove.name, () => {
    it('удаляет компонент с указанным id из репозитория', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedElementsRepository({
        findBy: exampleElements,
        remove: exampleElements,
      });

      const elementsIds = exampleElements.map((element) => element.id);
      const elementsService = new ElementsService(mockedRepository);
      await elementsService.remove(elementsIds);

      expect(mockedRepository.findBy).toHaveBeenCalledWith({ id: In(elementsIds) });
      expect(mockedRepository.remove).toHaveBeenCalledWith(exampleElements);
    });

    it('возвращает удалённый компонент', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedElementsRepository({
        findBy: exampleElements,
        remove: exampleElements,
      });

      const elementsIds = exampleElements.map((element) => element.id);
      const elementsService = new ElementsService(mockedRepository);
      const removedElements = await elementsService.remove(elementsIds);

      expect(removedElements).toStrictEqual(exampleElements);
    });
  });
});
