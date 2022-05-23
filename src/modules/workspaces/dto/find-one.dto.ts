import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class FindOneDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;
}