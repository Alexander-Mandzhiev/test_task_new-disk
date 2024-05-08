import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/configuration';
import { TypeOrmConfigService } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LessonsModule } from './lessons/lessons.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UserModule,
    LessonsModule,]
})
export class AppModule { }
