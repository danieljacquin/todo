import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';
import { FindOneDto } from '../roles/dto/find-one.tdo';

@ApiTags('task')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Get('all')
  findAll(): Promise<any> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<Task | null> {
    return this.tasksService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param() findOneDto: FindOneDto, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.tasksService.update(findOneDto, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<Task> {
    return this.tasksService.remove(findOneDto);
  }
}
