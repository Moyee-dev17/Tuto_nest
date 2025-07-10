import { dbModule } from "src/db.module";
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/db.service";
import { loginDto } from "./dto/loginDto";
import * as bcrypt from "bcrypt"
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "src/auth/auth.service";


@Injectable()

export class loginService{
    constructor(private readonly prisma:PrismaService , private readonly authService:AuthService){}

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
            const payload={id:userExist.id}
            console.log(payload)
            const token=await this.authService.tokenGenerate(payload);
            console.log(token)
            return{
             token:token,
                data:{
                   name:userExist.name,
                   lastname:userExist.lastname,
                   email:userExist.email,
                }
            }
        } catch (error) {
            console.log(error)
            throw new InternalServerErrorException("internal server error")
        }
    }
}