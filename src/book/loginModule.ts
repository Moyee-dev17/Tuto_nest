import { dbModule } from "src/db.module";

import { loginService } from "./loginService";
import { loginController } from "./loginController";
import { Module } from "@nestjs/common";

@Module({
    imports:[dbModule],
    providers:[loginService],
    controllers:[loginController]
})

export class loginModule{}