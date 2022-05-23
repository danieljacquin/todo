import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

 export class FindOneDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    id: number;
 }