import { examplePage } from '@colibrijs/mocks/pages';
import { describe, expect, it } from '@jest/globals';

import { createMockedPagesRepository } from './mocked-pages-repository';
import { PagesService } from '../pages.service';

describe(PagesService.name, () => {
  describe(PagesService.prototype.remove.name, () => {
    it('удаляет страницу с указанным id из репозитория', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedPagesRepository({
        findOneBy: examplePage,
        remove: examplePage,
      });

      const pagesService = new PagesService(mockedRepository);
      await pagesService.remove(examplePage.id);

      expect(mockedRepository.findOneBy).toHaveBeenCalledWith({ id: examplePage.id });
      expect(mockedRepository.remove).toHaveBeenCalledWith(examplePage);
    });

    it('выбрасывает ошибку, если страница с указанным id не найдена', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedPagesRepository({ findOneBy: null });
      const pagesService = new PagesService(mockedRepository);

      await expect(() => pagesService.remove('some-unknown-id')).rejects.toThrow(
        new Error(`Страница с id "some-unknown-id" не найдена`)
      );
    });

    it('возвращает удалённую страницу', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedPagesRepository({
        findOneBy: examplePage,
        remove: examplePage,
      });

      const pagesService = new PagesService(mockedRepository);
      const removedPage = await pagesService.remove(examplePage.id);

      expect(removedPage).toStrictEqual(examplePage);
    });
  });
});
