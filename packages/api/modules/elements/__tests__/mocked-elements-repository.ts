import { exampleElement, exampleElements } from '@colibrijs/mocks/elements';
import type { IElement, IElementConstructorOptions } from '@colibrijs/types';
import { jest } from '@jest/globals';

import type { IElementsRepository } from '../elements.types';

type RepositoryReturnTypes = {
  [K in keyof Omit<IElementsRepository, 'create' | 'findOneBy' | 'remove' | 'save'>]: Awaited<
    ReturnType<IElementsRepository[K]>
  >;
};

type PartialMock = jest.MockedObject<
  Partial<
    RepositoryReturnTypes & {
      create: IElement;
      findOneBy: IElement | null;
      remove: IElement;
      save: IElement;
    }
  >
>;

export function createMockedElementsRepository(
  partialMock: PartialMock = {}
): jest.MockedObject<IElementsRepository> {
  const repository = {
    create: jest
      .fn<(elementData: IElementConstructorOptions) => IElement>()
      .mockReturnValue(partialMock?.create ?? exampleElement),
    find: jest
      .fn<IElementsRepository['find']>()
      .mockResolvedValue(partialMock?.find ?? exampleElements),
    findOneBy: jest
      .fn<IElementsRepository['findOneBy']>()
      .mockResolvedValue('findOneBy' in partialMock ? partialMock.findOneBy : exampleElement),
    remove: jest
      .fn<(element: IElement) => Promise<IElement>>()
      .mockResolvedValue(partialMock?.remove ?? exampleElement),
    save: jest
      .fn<(element: IElement) => Promise<IElement>>()
      .mockResolvedValue(partialMock?.save ?? exampleElement),
  };

  // @ts-expect-error не может совладать с перегруженными функциями
  return repository;
}
