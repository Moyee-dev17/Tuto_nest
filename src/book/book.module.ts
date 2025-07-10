
import { dbModule } from "src/db.module"
import { BookService } from "./book.service"

import { BookController } from "./book.controller"
import {Module} from "@nestjs/common"

@Module({
  imports:[dbModule],
  providers:[BookService],
  controllers:[BookController]
})

export class BookModule{}


