import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { dbModule } from 'src/db.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  imports:[dbModule,JwtModule],
  exports:[AuthService]
})
export class AuthModule {}
