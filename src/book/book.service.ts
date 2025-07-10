
import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateBookDto } from "./dto/create-book.dto";
import { PrismaService } from "src/db.service";

Injectable();

export class BookService{
  constructor(private readonly prisma:PrismaService){}

  async create(body:CreateBookDto, id){
  try {
    const catExist= await this.prisma.categories.findUnique({where:{id}})
    if(catExist){
       throw new BadRequestException('categorie already exist')
    }
    const bookExist= await this.prisma.books.findFirst({where:{name:body.name}})
    if(bookExist){
      throw new BadRequestException('book already exist')
    }
    const createBook=await this.prisma.books.create({data:{
      name:body.name,
      description:body.description,
      totalPage:body.totalPage,
      rate:body.rate,
      author:body.author,
      categorieId:id
    }})

  } catch (error) {
    throw new InternalServerErrorException("internal server error")
  }
  }
  
async findOne(id:number){
  return this.prisma.books.findUnique({where:{id}})
}

async findAll(){
  return this.prisma.books.findMany()
}

async remove(id:number){
  return this.prisma.books.delete({where:{id}})
}
}