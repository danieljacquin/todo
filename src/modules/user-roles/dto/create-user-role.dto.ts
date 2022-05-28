import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateUserRoleDto {

    @IsNotEmpty()
    @IsNumberString()
    userId: number;

    @IsNotEmpty()
    @IsNumberString()
    rolId: number;
}
