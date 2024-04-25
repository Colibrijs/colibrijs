import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ComponentDTO, type ComponentConstructorOptions } from './component.entity';
import type { IComponentsRepository, IComponentsService } from './components.types';

@Injectable()
export class ComponentsService implements IComponentsService {
  constructor(
    @InjectRepository(ComponentDTO)
    private readonly components: IComponentsRepository
  ) {}

  /** Создаёт новый компонент с указанными параметрами */
  create(options: ComponentConstructorOptions): Promise<ComponentDTO> {
    const componentRaw = this.components.create(options);
    return this.components.save(componentRaw);
  }

  /** Возвращает все существующие компоненты */
  find(): Promise<ComponentDTO[]> {
    return this.components.find();
  }
}
