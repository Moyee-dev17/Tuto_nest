import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    name:string


    @IsString()
    @IsNotEmpty()
    description:string

    @IsInt()
    @IsNotEmpty()
    totalPage:number

    @IsInt()
    @IsNotEmpty()
    rate:number

    @IsString()
    @IsNotEmpty()
    author:string
}




