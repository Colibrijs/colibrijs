import type { IElement } from '@colibrijs/types';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';

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

  async remove(elementsIds: string[]): Promise<IElement[]> {
    const elements = await this.elements.findBy({ id: In(elementsIds) });

    return this.elements.remove(elements);
  }
}
