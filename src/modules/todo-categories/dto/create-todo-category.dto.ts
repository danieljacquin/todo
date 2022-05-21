import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateTodoCategoryDto {
    @IsNotEmpty()
    @IsNumber()
    readonly categoryId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly workspaceId: number;
}
