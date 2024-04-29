import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

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

  @Get(':pageId')
  @ApiOkResponse({ type: PageDTO })
  @ApiNotFoundResponse()
  getById(@Param('pageId') pageId: string): Promise<PageDTO> {
    return this.pagesService.findById(pageId);
  }

  @Post()
  @ApiCreatedResponse({ type: PageDTO })
  post(@Body() options: PageConstructorOptions): Promise<PageDTO> {
    return this.pagesService.create(options);
  }

  @Delete(':pageId')
  @ApiOkResponse({ type: PageDTO })
  delete(@Param('pageId') pageId: string): Promise<PageDTO> {
    return this.pagesService.remove(pageId);
  }
}
