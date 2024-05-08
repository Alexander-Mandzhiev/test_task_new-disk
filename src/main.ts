import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Новый Диск - тестовое задание')
    .setDescription('Документация тестового задания от организации Новый Диск')
    .setVersion('1.0')
    .addTag('Маршруты')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document)

  app.enableCors({
    origin: true,
    methods: ["HEAD", "GET", "POST", "PUT", "PATCH", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-For'
  })

  await app.listen(new ConfigService().get('port'));
  Logger.log(`server starting ${new ConfigService().get('port')}`)
}

bootstrap();
