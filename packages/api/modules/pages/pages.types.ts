import type { IPage, IPageConstructorOptions } from '@colibrijs/types';

import type { InjectionToken } from '@nestjs/common';
import type { Repository } from 'typeorm';

export type IPagesRepository = Pick<
  Repository<IPage>,
  'create' | 'find' | 'findOneBy' | 'remove' | 'save'
>;

export interface IPagesService {
  create(options: IPageConstructorOptions): Promise<IPage>;
  find(): Promise<IPage[]>;
  findById(pageId: string): Promise<IPage>;
  remove(componentId: string): Promise<IPage>;
}

export const PagesServiceToken: InjectionToken<IPagesService> = Symbol('PagesServiceToken');
