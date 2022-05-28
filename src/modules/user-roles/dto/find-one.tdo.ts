import { IsNotEmpty,  IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


 export class FindOneDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    id: number;
 }