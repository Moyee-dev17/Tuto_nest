import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class updateregisterDto{
    @IsString()
    @IsNotEmpty()
    lastname:string

    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsInt()
    @IsNotEmpty()
    roleId:number
}