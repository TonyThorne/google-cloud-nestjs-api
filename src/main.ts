import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // https://www.tomray.dev/deploy-nestjs-cloud-run
  await app.listen(parseInt(process.env.PORT) || 8080);
}
bootstrap();
