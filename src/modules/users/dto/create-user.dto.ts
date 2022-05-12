import { IsNotEmpty, IsString, MaxLength, IsEmail } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(50)
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;

}
