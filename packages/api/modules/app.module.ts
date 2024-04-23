import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ElementsModule } from './elements';

@Module({
  imports: [ConfigModule.forRoot(), ElementsModule],
})
export class AppModule {}
