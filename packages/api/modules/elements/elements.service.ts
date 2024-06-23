import type { IElement } from '@colibrijs/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ElementDTO, type ElementConstructorOptions } from './element.entity';
import type { IElementsRepository, IElementsService } from './elements.types';

@Injectable()
export class ElementsService implements IElementsService {
  constructor(
    @InjectRepository(ElementDTO)
    private readonly elements: IElementsRepository
  ) {}

  find(): Promise<IElement[]> {
    return this.elements.find();
  }

  create(elementData: ElementConstructorOptions): Promise<IElement> {
    const rawElement = this.elements.create(elementData);
    return this.elements.save(rawElement);
  }

  async remove(elementId: string): Promise<IElement> {
    const component = await this.elements.findOneBy({ id: elementId });

    if (!component) {
      throw new Error(`Компонент с id "${elementId}" не найден`);
    }

    return this.elements.remove(component);
  }
}
