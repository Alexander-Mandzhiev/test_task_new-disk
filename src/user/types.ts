import { ApiProperty } from "@nestjs/swagger";

export class UserResponse {
  @ApiProperty({ description: 'Уникальный идентификатор пользователя', example: "1" })
  id: number;
  @ApiProperty({ description: 'Имя пользователя', example: "Джонни" })
  user: string;
  @ApiProperty({ description: 'E-mail пользователя', example: 'example@email.com' })
  email: string;
}