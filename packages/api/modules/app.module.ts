import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComponentsModule } from './components';
import { ElementsModule } from './elements';
import { dataSource } from '../data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSource.options),
    ComponentsModule,
    ElementsModule,
  ],
})
export class AppModule {}
