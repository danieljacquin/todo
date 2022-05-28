import { IsNotEmpty, IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserRoleDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    userId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    rolId: number;
}
