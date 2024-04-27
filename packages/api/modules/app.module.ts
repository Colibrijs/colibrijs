import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComponentsModule } from './components';
import { ElementsModule } from './elements';
import { PagesModule } from './pages';
import { dataSource } from '../data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSource.options),
    PagesModule,
    ComponentsModule,
    ElementsModule,
  ],
})
export class AppModule {}
