import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LessonDto } from './dto/lesson.dto';
import { Lesson } from './entities/lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationsDto } from './dto/evaluations.dto';
import { Evaluations } from './entities/evaluations.entity';
import { EvaluationsResponse } from './types';

@Injectable()
export class LessonsService {

  constructor(@InjectRepository(Lesson) private service: typeof Lesson,
    @InjectRepository(Evaluations) private serviceEvaluations: typeof Evaluations) { }

  async findOneLesson(filter: { id?: number; name?: string; code?: string; }
  ): Promise<Lesson> {

    return this.service.findOne({ where: { ...filter } })
  }

  async create(dto: LessonDto) {
    try {
      const existingCode = await this.findOneLesson({ code: dto.code });
      if (existingCode) throw new Error(`Урок с таким кодом уже существует`);
      const existingName = await this.findOneLesson({ name: dto.name });
      if (existingName) throw new Error(`Урок с таким названием уже существует`);

      const admin = this.service.create({ ...dto });
      return admin.save();
    } catch (error) {
      throw new HttpException(` ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async createEvaluations(lesson_id: number, dto: EvaluationsDto): Promise<EvaluationsResponse> {
    try {
      const evaluations = this.serviceEvaluations.create({ lesson_id, ...dto });
      const res = await evaluations.save()
      const { id, user_id, score, ...data } = res
      return { id, user_id, score }
    } catch (error) {
      throw new HttpException(` ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    try {
      const lesson = await this.service.find({ relations: { evaluations: true }, select: { evaluations: { id: true, score: true, } } });
      return lesson;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }
}
