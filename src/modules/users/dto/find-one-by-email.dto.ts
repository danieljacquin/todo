import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class FindOneByEmailDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @MaxLength(100)
    readonly email: string;
}