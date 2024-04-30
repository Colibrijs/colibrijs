import type { IElement, IElementConstructorOptions } from '@colibrijs/types';

import type { InjectionToken } from '@nestjs/common';
import type { Repository } from 'typeorm';

export type IElementsRepository = Pick<
  Repository<IElement>,
  'create' | 'find' | 'findBy' | 'remove' | 'save'
>;

export interface IElementsService {
  create(elementsData: IElementConstructorOptions[]): Promise<IElement[]>;
  find(): Promise<IElement[]>;
  remove(elementsIds: string[]): Promise<IElement[]>;
}

export const ElementsServiceToken: InjectionToken<IElementsService> =
  Symbol('ElementsServiceToken');
