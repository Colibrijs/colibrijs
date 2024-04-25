import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComponentDTO } from './component.entity';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';
import { ComponentsServiceToken } from './components.types';

@Module({
  imports: [TypeOrmModule.forFeature([ComponentDTO])],
  controllers: [ComponentsController],
  providers: [{ provide: ComponentsServiceToken, useClass: ComponentsService }],
})
export class ComponentsModule {}
