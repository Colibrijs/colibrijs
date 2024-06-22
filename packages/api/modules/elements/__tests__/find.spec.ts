import { exampleElements } from '@colibrijs/mocks/elements';
import { describe, expect, it } from '@jest/globals';

import { createMockedElementsRepository } from './mocked-elements-repository';
import type { ElementDTO } from '../element.entity';
import { ElementsService } from '../elements.service';

describe(ElementsService.name, () => {
  describe(ElementsService.prototype.find.name, () => {
    it('возвращает результат поиска компонентов в репозитории', async () => {
      expect.assertions(1);

      const findExpectedResult: ElementDTO[] = exampleElements;
      const mockedRepository = createMockedElementsRepository({ find: findExpectedResult });
      const elementsService = new ElementsService(mockedRepository);
      const findActualResult = await elementsService.find();

      expect(findActualResult).toStrictEqual(findExpectedResult);
    });
  });
});
