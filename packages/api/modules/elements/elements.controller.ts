import type { IElement } from '@colibrijs/types';
import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { ElementDTO, ElementConstructorOptions } from './element.entity';
import { ElementsServiceToken, type IElementsService } from './elements.types';

@ApiTags('elements')
@Controller('/elements')
export class ElementsController {
  constructor(
    @Inject(ElementsServiceToken)
    private readonly elementsService: IElementsService
  ) {}

  @Get()
  @ApiOkResponse({ type: [ElementDTO] })
  get(@Query('route') route: string): Promise<IElement[]> {
    return this.elementsService.find(route);
  }

  @Post()
  @ApiBody({ type: ElementConstructorOptions })
  @ApiCreatedResponse({ type: ElementDTO })
  post(@Body() elementsData: ElementConstructorOptions): Promise<IElement> {
    return this.elementsService.create(elementsData);
  }

  @Patch(':elementId')
  @ApiBody({ type: Object })
  @ApiOkResponse({ type: ElementDTO })
  edit(@Param('elementId') elementId: string, @Body() newProps: object): Promise<IElement> {
    return this.elementsService.edit(elementId, newProps);
  }

  @Delete(':elementId')
  @ApiOkResponse({ type: ElementDTO })
  delete(@Param('elementId') elementId: string): Promise<IElement> {
    return this.elementsService.remove(elementId);
  }
}
