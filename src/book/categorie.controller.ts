
import { createCategorieDto } from "./dto/create-categorie.dto";
import { CategorieService } from "./categorie.service";
import { Body, Controller ,Param,Post,Get} from "@nestjs/common";



@Controller('categorie')

export class CategorieController{
  constructor(private readonly CatgerorieService:CategorieService){}

@Post()
create(@Body() body:createCategorieDto){
  return this.CatgerorieService.create(body)
}

@Get()
findOne(@Param('id') id:number){
  return this.CatgerorieService.findOne(id)
}

@Get()
 findAll(){
  return this.CatgerorieService.findAll()
 }
}