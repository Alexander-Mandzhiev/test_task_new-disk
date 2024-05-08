import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponse } from './types';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({ summary: 'Создать пользователя' })
  @ApiResponse({ status: 200, type: UserResponse })
  @Post()
  create(@Body() dto: UserDto) {
    return this.userService.create(dto);
  }

  @ApiOperation({ summary: 'Вывести всех пользователей' })
  @ApiResponse({ status: 200, type: [UserResponse] })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

}
