import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { PageDTO, PageConstructorOptions } from './page.entity';
import { type IPagesService, PagesServiceToken } from './pages.types';

@ApiTags('pages')
@Controller('/pages')
export class PagesController {
  constructor(
    @Inject(PagesServiceToken)
    private readonly pagesService: IPagesService
  ) {}

  @Get()
  @ApiOkResponse({ type: [PageDTO] })
  get(): Promise<PageDTO[]> {
    return this.pagesService.find();
  }

  @Post()
  @ApiCreatedResponse({ type: PageDTO })
  post(@Body() options: PageConstructorOptions): Promise<PageDTO> {
    return this.pagesService.create(options);
  }

  @Delete(':pageId')
  @ApiOkResponse({ type: PageDTO })
  delete(@Param(':pageId') pageId: string): Promise<PageDTO> {
    return this.pagesService.remove(pageId);
  }
}
