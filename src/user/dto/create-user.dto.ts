import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    @ApiProperty({ description: 'Имя пользователя', example: "Джонни" })
    @IsString()
    readonly name: string;
    @ApiProperty({ description: 'E-mail пользователя', example: 'example@email.com' })
    @IsEmail()
    readonly email: string;
}
