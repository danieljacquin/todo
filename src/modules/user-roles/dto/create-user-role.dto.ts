import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserRoleDto {

    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsNumber()
    rolId: number;
}
