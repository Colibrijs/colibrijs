import { exampleComponent } from '@colibrijs/mocks/components';
import { describe, expect, it } from '@jest/globals';

import { createMockedComponentsRepository } from './mocked-components-repository';
import { ComponentDTO } from '../component.entity';
import { ComponentsService } from '../components.service';

describe(ComponentsService, () => {
  describe(ComponentsService.prototype.find.name, () => {
    it('возвращает результат поиска компонентов в репозитории', async () => {
      expect.assertions(1);

      const findExpectedResult: ComponentDTO[] = [
        { ...exampleComponent, id: '1' },
        { ...exampleComponent, id: '2' },
      ];

      const mockedRepository = createMockedComponentsRepository({ find: findExpectedResult });
      const componentsService = new ComponentsService(mockedRepository);
      const findActualResult = await componentsService.find();

      expect(findActualResult).toStrictEqual(findExpectedResult);
    });
  });
});
