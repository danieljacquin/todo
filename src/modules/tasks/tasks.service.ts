import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneDto } from '../roles/dto/find-one.tdo';
import { UsersService } from '../users/users.service';
import { WorkspacesService } from '../workspaces/workspaces.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly workspacesService: WorkspacesService
  ){}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const {workspaceId} = createTaskDto;
    const workspace = await this.workspacesService.findOne({id:workspaceId});

    const created = await this.taskRepository.create({
      ...createTaskDto, workspace
    })

    return await this.taskRepository.save(created);
  }

  async findAll(): Promise<any> {
    return await this.taskRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<Task | null> {
    const { id } = findOneDto;
    const task = await this.taskRepository.findOne({
      where: {
        id
      }
    });
    if(!task) throw new NotFoundException(`Task with id: ${id} does not exist`);
     
    return task || null ;
    
  }

  async update(findOneDto: FindOneDto, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(findOneDto);
    const {workspaceId} = updateTaskDto;
    const workspace = await this.workspacesService.findOne({id:workspaceId});

    const updated = await this.taskRepository.preload({
      id: task.id,
      ...updateTaskDto, workspace
    });
    const saved = await this.taskRepository.save(updated);

    return saved;
  }

  async remove(findOneDto: FindOneDto): Promise<Task> {
    const task = await this.findOne(findOneDto);
    const deleted = await this.taskRepository.remove(task);

    return deleted;
  }
}
