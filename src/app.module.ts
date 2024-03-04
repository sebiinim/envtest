import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './db/typeorm-ex.module';
import { AppRepository } from './app.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    TypeOrmExModule.forCustomRepository([AppRepository]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
