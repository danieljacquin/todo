import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateTodoCategoryDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    readonly categoryId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    readonly workspaceId: number;
}
