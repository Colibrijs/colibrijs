import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ElementDTO } from './element.entity';

@ApiTags('elements')
@Controller('/elements')
export class ElementsController {
  @Get()
  @ApiOkResponse({ type: [ElementDTO] })
  get(): ElementDTO[] {
    return [
      { id: '1', props: {} },
      { id: '2', props: {} },
    ];
  }
}
