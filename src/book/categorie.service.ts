
import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { createCategorieDto } from "./dto/create-categorie.dto";
import { PrismaService } from "src/db.service";
import { updateCategorieDto } from "./dto/update-categorie";

Injectable()

export class CategorieService{
  constructor(private readonly prisma:PrismaService){}

  async create(body:createCategorieDto){
    try {
      const catExist=await this.prisma.categories.findFirst({where:{name:body.name}})
      if(catExist){throw new BadRequestException('category already exist')}
      const createCategorie= await this.prisma.categories.create({data:{
          name:body.name,
          description:body.description,
          type:body.type
      }})

    } catch (error) {
      throw new InternalServerErrorException('internal server error', error)
    }
  }

async findOne(id:number){
  return await this.prisma.categories.findUnique({where:{id}})
}

async findAll(){
  return await this.prisma.categories.findMany
}

async remove(id:number){
  return await this.prisma.categories.delete({where:{id}})
}

async update(id: number, updateData: updateCategorieDto) {
  return await this.prisma.users.update({
    where: { id },
    data: updateData,
  });
}
}