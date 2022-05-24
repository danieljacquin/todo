import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

class LoginAuthDto {

    @ApiProperty()
    @IsEmail()
    @IsString()
    email: string;

    @ApiProperty()
    @IsEmail()
    @IsString()
    password: string;
}