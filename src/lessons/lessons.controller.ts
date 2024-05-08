import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonDto } from './dto/lesson.dto';
import { EvaluationsDto } from './dto/evaluations.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EvaluationsResponse, lessonResponce, lessonsResponce } from './types';

@ApiTags('Уроки')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) { }

  @ApiOperation({ summary: 'Создать новый урок' })
  @ApiResponse({ status: 200, type: lessonResponce })
  @Post()
  create(@Body() dto: LessonDto) {
    return this.lessonsService.create(dto);
  }

  @ApiOperation({ summary: 'Поставить оценку пользователю' })
  @ApiResponse({ status: 200, type: EvaluationsResponse })
  @Post(':id/evaluations')
  createEvaluations(@Body() dto: EvaluationsDto, @Param('id') id: string) {
    return this.lessonsService.createEvaluations(+id, dto);
  }

  @ApiOperation({ summary: 'Поставить оценку пользователю' })
  @ApiResponse({ status: 200, type: [lessonsResponce] })
  @Get()
  findAll() {
    return this.lessonsService.findAll();
  }
}
