import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { categorieModule } from './book/categorie.module';
import { RegisterModule } from './book/registerUser.module';
import { loginModule } from './book/loginModule';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BookModule,categorieModule,RegisterModule,loginModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


