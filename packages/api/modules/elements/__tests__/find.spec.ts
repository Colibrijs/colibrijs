import { exampleElements } from '@colibrijs/mocks/elements';
import { describe, expect, it } from '@jest/globals';

import { createMockedElementsRepository } from './mocked-elements-repository';
import type { ElementDTO } from '../element.entity';
import { ElementsService } from '../elements.service';

describe(ElementsService.name, () => {
  describe(ElementsService.prototype.find.name, () => {
    it('возвращает результат поиска компонентов в репозитории по определённому роуту', async () => {
      expect.assertions(2);

      const findExpectedResult: ElementDTO[] = exampleElements;
      const mockedRepository = createMockedElementsRepository({ find: findExpectedResult });
      const elementsService = new ElementsService(mockedRepository);
      const findActualResult = await elementsService.find('/some-route/');

      expect(findActualResult).toStrictEqual(findExpectedResult);
      expect(mockedRepository.find).toHaveBeenLastCalledWith({
        join: {
          alias: 'element',
          innerJoin: { page: 'element.page' },
        },
        where: {
          page: { route: '/some-route/' },
        },
      });
    });
  });
});
