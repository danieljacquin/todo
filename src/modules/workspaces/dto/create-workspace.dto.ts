import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString, IsString, MaxLength} from "class-validator";

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
    @IsNumberString()
    readonly userId: number;

}
