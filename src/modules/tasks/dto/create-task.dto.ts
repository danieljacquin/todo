import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CreateTaskDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly desc: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    readonly workspaceId: number;
}
