import { IsNotEmpty, IsNumberString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

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
