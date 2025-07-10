import { dbModule } from "src/db.module";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import { PrismaClient } from '@prisma/client';
import { PrismaService } from "src/db.service";
import { registerUserdto } from "src/book/dto/registerUster.dto";
import { BadRequestException, Body } from "@nestjs/common";
enum role{
    user=1,
    admin=2,
    root=3
}

export class seedRole{
    constructor(private readonly prisma:PrismaService){}
    async createRole() {
    let tabRole=["User","Admin","Root"]
    for(let i in tabRole){
const roleExist = await this.prisma.role.findFirst({
        where: { name:tabRole[i] },
      });
      if(roleExist)continue;
      const createRole=await this.prisma.role.create({data:{name:tabRole[i]}})
      return createRole;
   }
    }
}

export class seedRoot{
    constructor(private readonly prisma:PrismaService ){}
    async createRoot(id:number){
        const userExist=await this.prisma.users.findUnique({where:{id}})
        if(userExist)return{message:"utilisateur existe dejà"}
        const passwoerdHash= await bcrypt.hash(process.env.PASSWORLD as string , 69)
        const createR= await this.prisma.users.create({data:{
            name:"root",
            lastname:"koffiroot",
            email:process.env.EMAIL as string,
            password:passwoerdHash,
            roleId:role.root
        }})
    }
}

export  class seedpwd{
constructor(private readonly prisma:PrismaService){}

async pwd(body:registerUserdto){
    const userexist=await this.prisma.users.findFirst({where:{name:body.name}})
    if(!userexist){throw new BadRequestException("user not found")}
    const passMatch= await bcrypt.compare(body.password,userexist.password)
}
}
