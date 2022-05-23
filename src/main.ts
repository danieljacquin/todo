import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();


  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true /*Ignora los atributos que no esten definidos en el DTO*/,
      forbidNonWhitelisted:
        true /*Alertar de un error al cliente cuando se envie un atributo no definido en el DTO*/,
    })
  );

  const config = new DocumentBuilder()
  .setTitle('TaskManager')
  .setDescription('The taskManager API description')
  .setVersion('1.0')
  .addTag('task-manager')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT || 5000);
  
  Logger.debug(`server listening at 5000 `, 'main.ts')
}
bootstrap();
