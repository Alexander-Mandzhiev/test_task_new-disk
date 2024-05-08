import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Lesson } from './entities/lesson.entity';
import { Evaluations } from './entities/evaluations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Lesson, Evaluations])],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule { }
