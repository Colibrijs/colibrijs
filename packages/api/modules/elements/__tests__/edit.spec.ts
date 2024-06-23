import { exampleElement } from '@colibrijs/mocks/elements';
import { describe, expect, it } from '@jest/globals';

import { createMockedElementsRepository } from './mocked-elements-repository';
import { ElementsService } from '../elements.service';

describe(ElementsService.name, () => {
  describe(ElementsService.prototype.edit.name, () => {
    it('патчит пропсы элемента с указанным id из репозитория', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedElementsRepository({
        findOneBy: exampleElement,
        save: {
          ...exampleElement,
          props: { ...exampleElement.props, title: 'Заголовок 2' },
        },
      });

      const elementsService = new ElementsService(mockedRepository);
      await elementsService.edit(exampleElement.id, { title: 'Заголовок 2' });

      expect(mockedRepository.findOneBy).toHaveBeenCalledWith({ id: exampleElement.id });
      expect(mockedRepository.save).toHaveBeenCalledWith({
        ...exampleElement,
        props: { ...exampleElement.props, title: 'Заголовок 2' },
      });
    });

    it('выбрасывает ошибку, если элемент с указанным id не найден', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedElementsRepository({ findOneBy: null });
      const elementsService = new ElementsService(mockedRepository);

      await expect(() =>
        elementsService.edit('some-unknown-id', { title: 'Заголовок 2' })
      ).rejects.toThrow(new Error(`Элемент с id "some-unknown-id" не найден`));
    });

    it('возвращает пропатченный элемент', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedElementsRepository({
        findOneBy: exampleElement,
        save: {
          ...exampleElement,
          props: { ...exampleElement.props, title: 'Заголовок 2' },
        },
      });

      const elementsService = new ElementsService(mockedRepository);
      const editedElement = await elementsService.edit(exampleElement.id, { title: 'Заголовок 2' });

      expect(editedElement).toStrictEqual({
        ...exampleElement,
        props: { ...exampleElement.props, title: 'Заголовок 2' },
      });
    });
  });
});
