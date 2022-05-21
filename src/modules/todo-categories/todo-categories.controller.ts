import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TodoCategoriesService } from './todo-categories.service';
import { CreateTodoCategoryDto } from './dto/create-todo-category.dto';
import { UpdateTodoCategoryDto } from './dto/update-todo-category.dto';
import { TodoCategory } from './entities/todo-category.entity';
import { FindOneDto } from '../users/dto/find-one.dto';

@Controller('todo-categories')
export class TodoCategoriesController {
  constructor(private readonly todoCategoriesService: TodoCategoriesService) {}

  @Post('create')
  create(@Body() createTodoCategoryDto: CreateTodoCategoryDto): Promise<TodoCategory> {
    return this.todoCategoriesService.create(createTodoCategoryDto);
  }

  @Get('all')
  findAll(): Promise<any> {
    return this.todoCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<TodoCategory | null> {
    return this.todoCategoriesService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param()findOneDto: FindOneDto, @Body() updateTodoCategoryDto: UpdateTodoCategoryDto): Promise<TodoCategory> {
    return this.todoCategoriesService.update(findOneDto, updateTodoCategoryDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<TodoCategory> {
    return this.todoCategoriesService.remove(findOneDto);
  }
}
