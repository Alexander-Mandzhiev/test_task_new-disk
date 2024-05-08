import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private service: typeof User) { }

  async findOne(filter: { id?: number; name?: string; email?: string; }
  ): Promise<User> {
    return this.service.findOne({ where: { ...filter } })
  }

  async create(dto: UserDto) {
    try {
      const existingEmail = await this.findOne({ email: dto.email });
      if (existingEmail) throw new Error(`Пользователь с таким e-mail уже существует`);
      const admin = this.service.create({ ...dto });
      return admin.save();
    } catch (error) {
      throw new HttpException(` ${error}`, HttpStatus.BAD_REQUEST)
    }
  }

  async findAll() {
    try {
      const user = await this.service.find();
      return user;
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.BAD_REQUEST);
    }
  }

}
