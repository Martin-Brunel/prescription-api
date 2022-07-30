import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

console.log(process.env);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Orgavita-presciption',
  };

  const config = new DocumentBuilder()
    .setTitle('Orgavita-presciption')
    .setDescription('Orgavita-presciption documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, customOptions);
  await app.listen(3000);
}
bootstrap();
