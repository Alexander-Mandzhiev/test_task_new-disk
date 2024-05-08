import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LessonDto {
    @ApiProperty({ description: 'Название урока', example: 'Музыка' })
    @IsString()
    readonly name: string;
    @ApiProperty({ description: 'Код урока', example: 'music' })
    @IsString()
    readonly code: string;
}
