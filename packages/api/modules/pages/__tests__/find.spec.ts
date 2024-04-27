import { examplePage } from '@colibrijs/mocks/pages';
import { describe, expect, it } from '@jest/globals';

import { createMockedPagesRepository } from './mocked-pages-repository';
import { PageDTO } from '../page.entity';
import { PagesService } from '../pages.service';

describe(PagesService.name, () => {
  describe(PagesService.prototype.find.name, () => {
    it('возвращает результат поиска страниц в репозитории', async () => {
      expect.assertions(1);

      const findExpectedResult: PageDTO[] = [
        { ...examplePage, id: '1' },
        { ...examplePage, id: '2' },
      ];

      const mockedRepository = createMockedPagesRepository({ find: findExpectedResult });
      const pagesService = new PagesService(mockedRepository);
      const findActualResult = await pagesService.find();

      expect(findActualResult).toStrictEqual(findExpectedResult);
    });
  });
});
