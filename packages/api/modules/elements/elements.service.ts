import type { IElement, IElementEditOptions } from '@colibrijs/types';
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

  find(route: string): Promise<IElement[]> {
    return this.elements.find({
      join: {
        alias: 'element',
        innerJoin: { page: 'element.page' },
      },
      where: {
        page: { route },
      },
    });
  }

  create(elementData: ElementConstructorOptions): Promise<IElement> {
    const rawElement = this.elements.create(elementData);
    return this.elements.save(rawElement);
  }

  async edit(elementId: string, newProps: IElementEditOptions): Promise<IElement> {
    const sourceElement = await this.elements.findOneBy({ id: elementId });

    if (!sourceElement) {
      throw new Error(`Элемент с id "${elementId}" не найден`);
    }

    return this.elements.save({
      ...sourceElement,
      props: { ...sourceElement.props, ...newProps },
    });
  }

  async remove(elementId: string): Promise<IElement> {
    const element = await this.elements.findOneBy({ id: elementId });

    if (!element) {
      throw new Error(`Элемент с id "${elementId}" не найден`);
    }

    return this.elements.remove(element);
  }
}
