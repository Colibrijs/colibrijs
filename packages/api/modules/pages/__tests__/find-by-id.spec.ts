import { examplePage } from '@colibrijs/mocks/pages';
import { describe, expect, it } from '@jest/globals';
import { NotFoundException } from '@nestjs/common';

import { createMockedPagesRepository } from './mocked-pages-repository';
import { PagesService } from '../pages.service';

describe(PagesService.name, () => {
  describe(PagesService.prototype.findById.name, () => {
    it('возвращает страницу найденную по id в репозитории', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedPagesRepository({ findOneBy: examplePage });
      const pagesService = new PagesService(mockedRepository);
      const findActualResult = await pagesService.findById(examplePage.id);

      expect(findActualResult).toStrictEqual(examplePage);
    });

    it('выбрасывает ошибку, если страницы с указанным id нет в репозитории', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedPagesRepository({ findOneBy: null });
      const pagesService = new PagesService(mockedRepository);

      await expect(() => pagesService.findById('unknown-id')).rejects.toThrow(
        new NotFoundException()
      );
    });
  });
});
