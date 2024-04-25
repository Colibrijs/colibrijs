import { describe, expect, it } from '@jest/globals';

import { createMockedComponentsRepository } from './mocked-components-repository';
import { defaultComponent } from './testing-data';
import { ComponentDTO } from '../component.entity';
import { ComponentsService } from '../components.service';

describe(ComponentsService, () => {
  describe(ComponentsService.prototype.find.name, () => {
    it('возвращает результат поиска компонентов в репозитории', async () => {
      expect.assertions(1);

      const findExpectedResult: ComponentDTO[] = [
        { ...defaultComponent, id: '1' },
        { ...defaultComponent, id: '2' },
      ];

      const mockedRepository = createMockedComponentsRepository({ find: findExpectedResult });
      const componentsService = new ComponentsService(mockedRepository);
      const findActualResult = await componentsService.find();

      expect(findActualResult).toStrictEqual(findExpectedResult);
    });
  });
});
