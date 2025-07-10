import { loginDto } from "./dto/loginDto";
import { loginService } from "./loginService";
import { Controller ,Body, Get,Post} from "@nestjs/common";

@Controller('login')

export class loginController{
constructor(private readonly loginService:loginService){}
@Post()
loginUser(@Body() body:loginDto){
return this.loginService.loginUser(body)
}
}