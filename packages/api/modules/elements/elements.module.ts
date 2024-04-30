import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ElementDTO } from './element.entity';
import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';
import { ElementsServiceToken } from './elements.types';

@Module({
  imports: [TypeOrmModule.forFeature([ElementDTO])],
  controllers: [ElementsController],
  providers: [{ provide: ElementsServiceToken, useClass: ElementsService }],
})
export class ElementsModule {}
