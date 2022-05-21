import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { Workspace } from './entities/workspace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Workspace]),UsersModule],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
  exports:[WorkspacesService]
})
export class WorkspacesModule {}
