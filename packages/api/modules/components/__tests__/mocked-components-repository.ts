import { jest } from '@jest/globals';

import { defaultComponent } from './testing-data';
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
      .mockReturnValue(partialMock?.create ?? defaultComponent),
    find: jest
      .fn<IComponentsRepository['find']>()
      .mockResolvedValue(partialMock?.find ?? [defaultComponent]),
    save: jest
      .fn<IComponentsRepository['save']>()
      .mockResolvedValue(partialMock?.save ?? defaultComponent),
  };

  // @ts-expect-error не может совладать с перегруженными функциями
  return repository;
}
