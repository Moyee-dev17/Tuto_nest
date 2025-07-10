import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Body() body: { id: number }) {
    const payload = { id: body.id };
    const token = await this.authService.tokenGenerate(payload);
    return token; // { access_token: "..." }
  }
}
