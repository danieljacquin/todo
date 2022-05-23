import { IsEmail, IsString } from "class-validator";

class LoginAuthDto {

    @IsEmail()
    @IsString()
    email: string;

    @IsEmail()
    @IsString()
    password: string;
}