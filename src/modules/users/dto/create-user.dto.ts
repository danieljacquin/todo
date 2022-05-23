import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, IsEmail } from "class-validator";

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly lastName: string;

    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @MaxLength(50)
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly password: string;

}
