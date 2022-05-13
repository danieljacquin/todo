import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService {

  constructor(
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workspace>
  ){}

  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    
    const created = await this.workspaceRepository.create(createWorkspaceDto);
    const saved = await this.workspaceRepository.save(created);

    return saved
  }

  findAll() {
    return `This action returns all workspaces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }
}
