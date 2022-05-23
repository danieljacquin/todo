import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTodoCategoryDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly categoryId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly workspaceId: number;
}
