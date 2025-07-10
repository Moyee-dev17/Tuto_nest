import { Injectable, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  async onModuleInit() {
    await this.$connect().then(()=>{
          console.log("Database connected")
    })
    .catch((error)=>{
      console.log("Error connection",error)
    })
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
