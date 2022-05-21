import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { FindOneDto } from '../users/dto/find-one.dto';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class WorkspacesService {

  constructor(
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workspace>,
    private readonly usersService: UsersService
  ){}

  async create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    //destructurar un objeto en js
    const {userId:id} = createWorkspaceDto;
    const user = await this.usersService.findOne({id});
    const created = await this.workspaceRepository.create({
      ...createWorkspaceDto, user
    });

    return await this.workspaceRepository.save(created);
  }

  async findAll(): Promise<any> {
    return await this.workspaceRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<Workspace | null> {
    const { id } = findOneDto;
    const workspace = await this.workspaceRepository.findOne({
      where: {
        id
      }
    });
    if(!workspace) throw new NotFoundException(`Workspace with id: ${id} does not exist`);
     
    return workspace || null ;
  }

  async update(findOneDto: FindOneDto, updateWorkspaceDto: UpdateWorkspaceDto): Promise<Workspace> {
    const workspace = await this.findOne(findOneDto)
    const {userId:id} = updateWorkspaceDto;
    const user = await this.usersService.findOne({id});
    const updated = await this.workspaceRepository.preload({
      id: workspace.id,
      ...updateWorkspaceDto, user
    });
    const saved = await this.workspaceRepository.save(updated);

    return saved;
  }

  async remove(findOneDto: FindOneDto): Promise<Workspace> {
    const workspace = await this.findOne(findOneDto)
    const deleted = await this.workspaceRepository.remove(workspace);

    return deleted;
  }
}
