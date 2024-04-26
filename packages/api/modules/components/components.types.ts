import type { IComponent, IComponentConstructorOptions } from '@colibrijs/types';

import type { InjectionToken } from '@nestjs/common';
import type { Repository } from 'typeorm';

export type IComponentsRepository = Pick<
  Repository<IComponent>,
  'create' | 'find' | 'findOneBy' | 'remove' | 'save'
>;

export interface IComponentsService {
  create(options: IComponentConstructorOptions): Promise<IComponent>;
  find(): Promise<IComponent[]>;
  remove(componentId: string): Promise<IComponent>;
}

export const ComponentsServiceToken: InjectionToken<IComponentsService> =
  Symbol('ComponentsServiceToken');
