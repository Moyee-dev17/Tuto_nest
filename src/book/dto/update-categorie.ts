import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class updateCategorieDto{
@IsString()
@IsNotEmpty()
name:string

@IsString()
@IsNotEmpty()
description:string

@IsString()
@IsNotEmpty()
type:string
}
