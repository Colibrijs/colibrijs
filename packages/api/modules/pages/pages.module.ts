import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PageDTO } from './page.entity';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { PagesServiceToken } from './pages.types';

@Module({
  imports: [TypeOrmModule.forFeature([PageDTO])],
  controllers: [PagesController],
  providers: [{ provide: PagesServiceToken, useClass: PagesService }],
})
export class PagesModule {}
