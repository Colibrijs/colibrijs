import { exampleElement, exampleElements } from '@colibrijs/mocks/elements';
import type { IElement, IElementConstructorOptions } from '@colibrijs/types';
import { jest } from '@jest/globals';

import type { IElementsRepository } from '../elements.types';

type RepositoryReturnTypes = {
  [K in keyof Omit<IElementsRepository, 'create' | 'remove' | 'save'>]: Awaited<
    ReturnType<IElementsRepository[K]>
  >;
};

type PartialMock = jest.MockedObject<
  Partial<
    RepositoryReturnTypes & {
      create: IElement;
      remove: IElement[];
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
    findBy: jest
      .fn<IElementsRepository['findBy']>()
      .mockResolvedValue(partialMock.findBy ?? exampleElements),
    remove: jest
      .fn<(elements: IElement[]) => Promise<IElement[]>>()
      .mockResolvedValue(partialMock?.remove ?? exampleElements),
    save: jest
      .fn<(element: IElement) => Promise<IElement>>()
      .mockResolvedValue(partialMock?.save ?? exampleElement),
  };

  // @ts-expect-error не может совладать с перегруженными функциями
  return repository;
}
