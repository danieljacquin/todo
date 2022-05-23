import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { UserRole } from './entities/user-role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from '../roles/roles.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserRole]),RolesModule,UsersModule],
  controllers: [UserRolesController],
  providers: [UserRolesService]
})
export class UserRolesModule {}
