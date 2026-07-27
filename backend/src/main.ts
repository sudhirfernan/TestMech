import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // your frontend's actual dev server URL/port
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();