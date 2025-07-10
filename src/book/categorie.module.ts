

import { dbModule } from "src/db.module";
import { CategorieService } from "./categorie.service";
import { CategorieController } from "./categorie.controller";
import { Module } from "@nestjs/common";

@Module({
  imports:[dbModule],
  providers:[CategorieService],
  controllers:[CategorieController]
})

export class categorieModule{}


