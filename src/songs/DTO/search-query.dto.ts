import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from "class-validator";

export class SearchQueryDto{
    @IsString()
    @IsNotEmpty()
    q!: string;

    @IsOptional()
    @Type(()=> Number)
    @IsInt()
    @Min(1)
    page!: number;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(50)
    limit!: number;
}