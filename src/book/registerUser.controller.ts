
import { Body, Controller , Param, Post,Patch, Get} from "@nestjs/common";
import { RegisterUserService } from "./registerUser.service";
import { registerUserdto } from "./dto/registerUster.dto";
import { updateCategorieDto } from "./dto/update-categorie";

@Controller('register')

export class RegisterController{
    constructor(private readonly registerservice:RegisterUserService){}

@Post()
create(@Body() body:registerUserdto){
    return this.registerservice.createUser(body)
}

@Get(':id')
findOne(@Param('id') id:number){
    return this.registerservice.findOne(+id)
}

@Get()
findAll(){
    return this.registerservice.findAll()
}


@Patch(':id')
update(@Param('id') id:number , updateData: updateCategorieDto){
    return this.registerservice.update(id,updateData)
}
}