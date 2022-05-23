import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';
import { FindOneDto } from '../users/dto/find-one.dto';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Post('create')
  create(@Body() createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    return this.workspacesService.create(createWorkspaceDto);
  }

  @Get('all')
  findAll(): Promise<any> {
    return this.workspacesService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<Workspace | null> {
    return this.workspacesService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param()findOneDto: FindOneDto, @Body() updateWorkspaceDto: UpdateWorkspaceDto): Promise<Workspace> {
    return this.workspacesService.update(findOneDto, updateWorkspaceDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<Workspace> {
    return this.workspacesService.remove(findOneDto);
  }
}
