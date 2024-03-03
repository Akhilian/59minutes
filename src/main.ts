import { NestFactory } from '@nestjs/core';
import { RootModule } from './rootModule';
import { CustomLogger } from './CustomLogger';
import { WinstonModule } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(RootModule, {
    logger: WinstonModule.createLogger(CustomLogger.createLoggerConfig()),
  });
  await app.listen(3001);
}

bootstrap();
