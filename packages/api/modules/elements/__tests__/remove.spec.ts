import { exampleElement } from '@colibrijs/mocks/elements';
import { describe, expect, it } from '@jest/globals';

import { createMockedElementsRepository } from './mocked-elements-repository';
import { ElementsService } from '../elements.service';

describe(ElementsService.name, () => {
  describe(ElementsService.prototype.remove.name, () => {
    it('удаляет компонент с указанным id из репозитория', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedElementsRepository({
        findOneBy: exampleElement,
        remove: exampleElement,
      });

      const elementsService = new ElementsService(mockedRepository);
      await elementsService.remove(exampleElement.id);

      expect(mockedRepository.findOneBy).toHaveBeenCalledWith({ id: exampleElement.id });
      expect(mockedRepository.remove).toHaveBeenCalledWith(exampleElement);
    });

    it('выбрасывает ошибку, если элемент с указанным id не найден', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedElementsRepository({ findOneBy: null });
      const elementsService = new ElementsService(mockedRepository);

      await expect(() => elementsService.remove('some-unknown-id')).rejects.toThrow(
        new Error(`Элемент с id "some-unknown-id" не найден`)
      );
    });

    it('возвращает удалённый компонент', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedElementsRepository({
        findOneBy: exampleElement,
        remove: exampleElement,
      });

      const elementsService = new ElementsService(mockedRepository);
      const removedElements = await elementsService.remove(exampleElement.id);

      expect(removedElements).toStrictEqual(exampleElement);
    });
  });
});
