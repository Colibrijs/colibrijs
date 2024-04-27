import { examplePage } from '@colibrijs/mocks/pages';
import { jest } from '@jest/globals';

import type { IPagesRepository } from '../pages.types';

type RepositoryReturnTypes = {
  [K in keyof IPagesRepository]: Awaited<ReturnType<IPagesRepository[K]>>;
};

type PartialMock = jest.MockedObject<Partial<RepositoryReturnTypes>>;

export function createMockedPagesRepository(
  partialMock: PartialMock = {}
): jest.MockedObject<IPagesRepository> {
  const repository = {
    create: jest
      .fn<IPagesRepository['create']>()
      .mockReturnValue(partialMock?.create ?? examplePage),
    find: jest.fn<IPagesRepository['find']>().mockResolvedValue(partialMock?.find ?? [examplePage]),
    findOneBy: jest
      .fn<IPagesRepository['findOneBy']>()
      .mockResolvedValue('findOneBy' in partialMock ? partialMock.findOneBy : examplePage),
    remove: jest
      .fn<IPagesRepository['remove']>()
      .mockResolvedValue(partialMock?.remove ?? examplePage),
    save: jest.fn<IPagesRepository['save']>().mockResolvedValue(partialMock?.save ?? examplePage),
  };

  // @ts-expect-error не может совладать с перегруженными функциями
  return repository;
}
