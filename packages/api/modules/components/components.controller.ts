import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiOkResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { ComponentDTO, ComponentConstructorOptions } from './component.entity';
import { type IComponentsService, ComponentsServiceToken } from './components.types';

@ApiTags('components')
@Controller('/components')
export class ComponentsController {
  constructor(
    @Inject(ComponentsServiceToken)
    private readonly componentsService: IComponentsService
  ) {}

  @Get()
  @ApiOkResponse({ type: [ComponentDTO] })
  get(): Promise<ComponentDTO[]> {
    return this.componentsService.find();
  }

  @Post()
  @ApiCreatedResponse({ type: ComponentDTO })
  post(@Body() options: ComponentConstructorOptions): Promise<ComponentDTO> {
    return this.componentsService.create(options);
  }
}
