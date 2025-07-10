import { dbModule } from "src/db.module";
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/db.service";
import { loginDto } from "./dto/loginDto";
import bcrypt from "bcrypt"

@Injectable()

export class loginService{
    constructor(private readonly prisma:PrismaService){}

    async loginUser(body:loginDto){
        try {
            const userExist= await this.prisma.users.findFirst({where:{name:body.name}})
            if(!userExist){
                throw new NotFoundException("user not found")
            }
              const isMatch= await bcrypt.compare(body.password,userExist.password)
              if(!isMatch){
                throw new BadRequestException('mot de passe incorrect')    
              } 
        } catch (error) {
            throw new InternalServerErrorException("internal server error")
        }
    }
}