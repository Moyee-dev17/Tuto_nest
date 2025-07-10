import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Prisma } from '@prisma/client';
import { dbModule } from './db.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
