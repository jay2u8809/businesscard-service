import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import { join } from 'path';

const clientRootPath = 'resources/';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  // app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', clientRootPath + 'public'));
  app.setBaseViewsDir(join(__dirname, '..', clientRootPath + 'views'));
  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
