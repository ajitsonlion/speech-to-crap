/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { NestExpressApplication } from '@nestjs/platform-express';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { join } from 'path';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'memeui'));
  app.setViewEngine('hbs');
  app.use(compression());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const { PORT = 3000, LOCAL_ADDRESS = '0.0.0.0' } = process.env;

  await app.listen(PORT, LOCAL_ADDRESS, () => {
    Logger.log(
      `Listening at http://localhost: ${LOCAL_ADDRESS}:${PORT}/${globalPrefix}`
    );
  });
}

bootstrap();
