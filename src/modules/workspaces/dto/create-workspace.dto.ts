import { IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";

export class CreateWorkspaceDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly desc: string;

    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;

}
