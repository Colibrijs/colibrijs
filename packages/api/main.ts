import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fs from 'node:fs/promises';

import { AppModule } from './modules/app.module';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    cors: true,
  });

  const logger = new Logger();
  const { justGenerateSwagger } = await generateSwagger(app);

  if (justGenerateSwagger) {
    return;
  }

  app.enableShutdownHooks();
  await app.listen(3001, (_, address) => logger.log(`Сервер api запущен по адресу: ${address}`));
}

async function generateSwagger(
  app: NestFastifyApplication
): Promise<{ justGenerateSwagger: boolean }> {
  const config = new DocumentBuilder()
    .setExternalDoc('OpenAPI schema', './openapi.json')
    .setTitle('Colibrijs API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const appConfig = app.get(ConfigService);
  const justGenerateSwagger = Boolean(appConfig.get('JUST_GENERATE_SWAGGER'));

  if (justGenerateSwagger) {
    await fs.writeFile('./openapi.json', JSON.stringify(document, null, 2), 'utf8');
  } else {
    SwaggerModule.setup('/', app, document);
  }

  return { justGenerateSwagger };
}
