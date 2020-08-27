import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { Category } from './category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      database: process.env.TYPEORM_DATABASE,
      entities: [Category],
    }),
    TypeOrmModule.forFeature([Category])
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
