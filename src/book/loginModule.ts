import { dbModule } from "src/db.module";
import { loginService } from "./loginService";
import { loginController } from "./loginController";
import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";


@Module({
    imports:[dbModule , AuthModule],
    providers:[loginService],
    controllers:[loginController]
})

export class loginModule{}