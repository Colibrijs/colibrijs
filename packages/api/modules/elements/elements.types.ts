import type { IElement, IElementConstructorOptions, IElementEditOptions } from '@colibrijs/types';
import type { InjectionToken } from '@nestjs/common';
import type { Repository } from 'typeorm';

import { ElementDTO } from './element.entity';

export type IElementsRepository = Pick<
  Repository<ElementDTO>,
  'create' | 'find' | 'findOneBy' | 'remove' | 'save'
>;

export interface IElementsService {
  create(elementData: IElementConstructorOptions): Promise<IElement>;
  /** page.route для которого нужно искать контент */
  find(route: string): Promise<IElement[]>;
  edit(elementId: string, newProps: IElementEditOptions): Promise<IElement>;
  remove(elementId: string): Promise<IElement>;
}

export const ElementsServiceToken: InjectionToken<IElementsService> =
  Symbol('ElementsServiceToken');
