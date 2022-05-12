import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class FindOneByEmailDto {

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    @MaxLength(100)
    readonly email: string;
}