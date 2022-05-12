import * as path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './modules/roles/roles.module';
import { UserRolesModule } from './modules/user-roles/user-roles.module';
import { UsersModule } from  './modules/users/users.module'
import { ConfigModule } from '@nestjs/config';

const NODE_ENV = process.env.NODE_ENV || 'local';
const envFilePath = path.resolve(__dirname, `../.env.${NODE_ENV}`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    UsersModule,
    RolesModule,
    UserRolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
