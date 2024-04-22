import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    cors: true,
  });

  const logger = new Logger();
  app.enableShutdownHooks();

  await app.listen(3001, (_, address) => logger.log(`Сервер api запущен по адресу: ${address}`));
}

bootstrap();
