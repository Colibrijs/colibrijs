import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PageDTO, type PageConstructorOptions } from './page.entity';
import type { IPagesRepository, IPagesService } from './pages.types';

@Injectable()
export class PagesService implements IPagesService {
  constructor(
    @InjectRepository(PageDTO)
    private readonly pages: IPagesRepository
  ) {}

  /** Создаёт новую страницу с указанными параметрами */
  create(options: PageConstructorOptions): Promise<PageDTO> {
    const pageRaw = this.pages.create(options);
    return this.pages.save(pageRaw);
  }

  /** Возвращает все существующие страницы */
  find(): Promise<PageDTO[]> {
    return this.pages.find();
  }

  async remove(pageId: string): Promise<PageDTO> {
    const page = await this.pages.findOneBy({ id: pageId });

    if (!page) {
      throw new Error(`Страница с id "${pageId}" не найдена`);
    }

    return this.pages.remove(page);
  }
}
