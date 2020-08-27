import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto{

    @ApiProperty({
        type: String,
        description: 'name of category'
    })
    name: string;
}