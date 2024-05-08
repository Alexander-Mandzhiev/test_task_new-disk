import { ApiProperty } from "@nestjs/swagger";

export class EvaluationsResponse {
    @ApiProperty({ description: 'Уникальный идентификатор оценки пользователя', example: "1" })
    id: number;
    @ApiProperty({ description: 'Уникальный идентификатор пользователя', example: "1" })
    user_id: number;
    @ApiProperty({ description: 'Баллы', example: '75' })
    score: number;
}

export class lessonResponce {
    @ApiProperty({ description: 'Уникальный идентификатор урока', example: "1" })
    id: number;
    @ApiProperty({ description: 'Название урока', example: "Музыка" })
    name: string;
    @ApiProperty({ description: 'Код урока', example: 'music' })
    code: string;
}

export class lessonsResponce extends lessonResponce {
    @ApiProperty({
        description: 'Список оценок учащихся', example: [
            {
                "id": "3",
                "score": "56",
                "user":
                {
                    "id": "1",
                    "name": "Джонни",
                    "email": "silverhand@cyber.punk"
                }
            },
            {
                "id": "7",
                "score": "0",
                "user":
                {
                    "id": "2",
                    "name": "Билл",
                    "email": "bill@cyber.punk"
                }
            }]
    })
    evaluations: EvaluationsResponse[]
}