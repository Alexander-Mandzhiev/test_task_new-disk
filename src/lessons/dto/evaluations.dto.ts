import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class EvaluationsDto {

    @ApiProperty({ description: 'Баллы', example: '75' })
    @IsNumber()
    score: number;

    @ApiProperty({ description: 'Уникальный идентификатор пользователя', example: "1" })
    @IsNumber()
    user_id: number

}
