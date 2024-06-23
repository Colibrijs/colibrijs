import type { IElement, IElementConstructorOptions } from '@colibrijs/types';

import type { InjectionToken } from '@nestjs/common';
import type { Repository } from 'typeorm';

export type IElementsRepository = Pick<
  Repository<IElement>,
  'create' | 'find' | 'findOneBy' | 'remove' | 'save'
>;

export interface IElementsService {
  create(elementData: IElementConstructorOptions): Promise<IElement>;
  find(): Promise<IElement[]>;
  remove(elementId: string): Promise<IElement>;
}

export const ElementsServiceToken: InjectionToken<IElementsService> =
  Symbol('ElementsServiceToken');
