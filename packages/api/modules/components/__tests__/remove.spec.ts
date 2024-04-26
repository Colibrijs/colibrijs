import { exampleComponent } from '@colibrijs/mocks/components';
import { describe, expect, it } from '@jest/globals';

import { createMockedComponentsRepository } from './mocked-components-repository';
import { ComponentsService } from '../components.service';

describe(ComponentsService, () => {
  describe(ComponentsService.prototype.remove.name, () => {
    it('удаляет компонент с указанным id из репозитория', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedComponentsRepository({
        findOneBy: exampleComponent,
        remove: exampleComponent,
      });

      const componentsService = new ComponentsService(mockedRepository);
      await componentsService.remove(exampleComponent.id);

      expect(mockedRepository.findOneBy).toHaveBeenCalledWith({ id: exampleComponent.id });
      expect(mockedRepository.remove).toHaveBeenCalledWith(exampleComponent);
    });

    it('выбрасывает ошибку, если компонент с указанным id не найден', async () => {
      expect.assertions(2);

      const mockedRepository = createMockedComponentsRepository({ findOneBy: null });
      const componentsService = new ComponentsService(mockedRepository);
      await componentsService.remove('some-unknown-id');

      await expect(() => componentsService.remove('some-unknown-id')).rejects.toThrow(
        new Error(`Компонент с id "some-unknown-id" не найден`)
      );
    });

    it('возвращает удалённый компонент', async () => {
      expect.assertions(1);

      const mockedRepository = createMockedComponentsRepository({
        findOneBy: exampleComponent,
        remove: exampleComponent,
      });

      const componentsService = new ComponentsService(mockedRepository);
      const removedComponent = await componentsService.remove(exampleComponent.id);

      expect(removedComponent).toStrictEqual(exampleComponent);
    });
  });
});
