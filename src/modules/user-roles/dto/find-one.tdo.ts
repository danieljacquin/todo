import { IsNotEmpty, IsNumber } from "class-validator";

 export class FindOneDto {

    @IsNotEmpty()
    @IsNumber()
    id: number;
 }