import { Injectable, BadRequestException, InternalServerErrorException, Controller } from "@nestjs/common";
import { PrismaService } from "src/db.service";
import * as bcrypt from "bcrypt";
import { registerUserdto} from "./dto/registerUster.dto";
import { updateCategorieDto } from "./dto/update-categorie";
import { updateregisterDto } from "./dto/updateregister-user.dto";

enum Role {
  User = 1,
  Admin = 2,
  Root = 3
}

@Injectable()
export class RegisterUserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(body:registerUserdto) {
    try {
      const userExist = await this.prisma.users.findFirst({
        where: {email:body.email}
      });

      if (userExist) {
        throw new BadRequestException("User with this name or email already exists");
      }

      const passwdHash = await bcrypt.hash(body.password, 8);

      const userCreate = await this.prisma.users.create({
        data: {
          name: body.name,
          lastname: body.lastname,
          email: body.email,
          password: passwdHash,
          roleId: Role.User
        }
      });

      return userCreate;

    } catch (error) {
      console.error("Erreur interne:", error);
      throw new InternalServerErrorException("Internal server error");
    }
  }

async findOne(id:number){
    return await this.prisma.users.findUnique({where:{id}})
}

async findAll(){
    return await this.prisma.users.findMany()
}

async remove(id:number){
    return await this.prisma.users.delete({where:{id}})
}

async update(id:number , updateData:updateregisterDto){
  return await this.prisma.categories.update({where:{id},data:updateData
  })
}
}
