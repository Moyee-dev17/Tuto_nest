import { dbModule } from "src/db.module";
import { RegisterUserService } from "./registerUser.service";
import { RegisterController } from "./registerUser.controller";
import { Module } from "@nestjs/common";

@Module({
    imports:[dbModule,],
    providers:[RegisterUserService],
    controllers:[RegisterController]
})

export class RegisterModule{}