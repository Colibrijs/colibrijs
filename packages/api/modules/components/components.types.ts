import type { InjectionToken } from '@nestjs/common';
import type { Repository } from 'typeorm';

import type { ComponentConstructorOptions, ComponentDTO } from './component.entity';

export type IComponentsRepository = Pick<Repository<ComponentDTO>, 'create' | 'save' | 'find'>;

export interface IComponentsService {
  create(options: ComponentConstructorOptions): Promise<ComponentDTO>;
  find(): Promise<ComponentDTO[]>;
}

export const ComponentsServiceToken: InjectionToken<IComponentsService> =
  Symbol('ComponentsServiceToken');
