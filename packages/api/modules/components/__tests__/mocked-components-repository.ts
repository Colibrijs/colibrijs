import { exampleComponent } from '@colibrijs/mocks/components';
import { jest } from '@jest/globals';

import type { IComponentsRepository } from '../components.types';

type RepositoryReturnTypes = {
  [K in keyof IComponentsRepository]: Awaited<ReturnType<IComponentsRepository[K]>>;
};

type PartialMock = jest.MockedObject<Partial<RepositoryReturnTypes>>;

export function createMockedComponentsRepository(
  partialMock?: PartialMock
): jest.MockedObject<IComponentsRepository> {
  const repository = {
    create: jest
      .fn<IComponentsRepository['create']>()
      .mockReturnValue(partialMock?.create ?? exampleComponent),
    find: jest
      .fn<IComponentsRepository['find']>()
      .mockResolvedValue(partialMock?.find ?? [exampleComponent]),
    findOneBy: jest
      .fn<IComponentsRepository['findOneBy']>()
      .mockRejectedValue(partialMock?.findOneBy ?? exampleComponent),
    remove: jest
      .fn<IComponentsRepository['remove']>()
      .mockRejectedValue(partialMock?.remove ?? exampleComponent),
    save: jest
      .fn<IComponentsRepository['save']>()
      .mockResolvedValue(partialMock?.save ?? exampleComponent),
  };

  // @ts-expect-error не может совладать с перегруженными функциями
  return repository;
}
