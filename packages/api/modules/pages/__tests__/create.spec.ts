import { examplePage, examplePageConstructorOptions } from '@colibrijs/mocks/pages';
import { describe, expect, it } from '@jest/globals';

import { createMockedPagesRepository } from './mocked-pages-repository';
import { PagesService } from '../pages.service';

describe(PagesService, () => {
  describe(PagesService.prototype.create.name, () => {
    it('создаёт экземпляр страницы и сохраняет её в репозиторий', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedPagesRepository({
        create: examplePage,
        save: examplePage,
      });

      const pagesService = new PagesService(mockedRepository);
      await pagesService.create(examplePageConstructorOptions);

      expect(mockedRepository.create).toHaveBeenCalledWith(examplePageConstructorOptions);
      expect(mockedRepository.save).toHaveBeenCalledWith(examplePage);
    });
  });
});
