import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { AppService } from '../app.service'

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const service = app.select(AppModule).get(AppService, {strict: true});
  const message = service.getHello();
  console.log("ólea ai ó", message);
  
  
  await app.close();
}
bootstrap();
