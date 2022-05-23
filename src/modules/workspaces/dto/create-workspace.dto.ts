import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";

export class CreateWorkspaceDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    readonly desc: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly userId: number;

}
