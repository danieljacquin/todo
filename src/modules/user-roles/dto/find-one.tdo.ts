import { IsNotEmpty,  IsNumberString } from "class-validator";

 export class FindOneDto {

    @IsNotEmpty()
    @IsNumberString()
    id: number;
 }