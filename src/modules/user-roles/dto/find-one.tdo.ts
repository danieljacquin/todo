import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";


 export class FindOneDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    id: number;
 }