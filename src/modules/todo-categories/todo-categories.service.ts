import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';
import { FindOneDto } from '../users/dto/find-one.dto';
import { WorkspacesService } from '../workspaces/workspaces.service';
import { CreateTodoCategoryDto } from './dto/create-todo-category.dto';
import { UpdateTodoCategoryDto } from './dto/update-todo-category.dto';
import { TodoCategory } from './entities/todo-category.entity';

@Injectable()
export class TodoCategoriesService {

    constructor(
    @InjectRepository(TodoCategory)
    private readonly todoCategoryRepository: Repository<TodoCategory>,
    private readonly categoriesService: CategoriesService,
    private readonly workspacesService: WorkspacesService
  ){}

  async create(createTodoCategoryDto: CreateTodoCategoryDto): Promise<TodoCategory> {
    //destructurar un objeto en js
    const {categoryId} = createTodoCategoryDto;
    const category = await this.categoriesService.findOne({id:categoryId});
    const {workspaceId} = createTodoCategoryDto;
    const workspace = await this.workspacesService.findOne({id:workspaceId});

    const created = await this.todoCategoryRepository.create({
      ...createTodoCategoryDto, category, workspace
    });

    return await this.todoCategoryRepository.save(created);
  }

  async findAll(): Promise<any> {
    return await this.todoCategoryRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<TodoCategory | null> {
    const { id } = findOneDto;
    const todoCategory = await this.todoCategoryRepository.findOne({
      where: {
        id
      }
    });
    if(!todoCategory) throw new NotFoundException(`TodoCategory with id: ${id} does not exist`);
     
    return todoCategory || null ;
  }

  async update(findOneDto: FindOneDto, updateTodoCategoryDto: UpdateTodoCategoryDto): Promise<TodoCategory> {
    const todoCategory = await this.findOne(findOneDto)
    const {categoryId} = updateTodoCategoryDto;
    const category = await this.categoriesService.findOne({id:categoryId});
    const {workspaceId} = updateTodoCategoryDto;
    const workspace = await this.workspacesService.findOne({id:workspaceId});

    const updated = await this.todoCategoryRepository.preload({
      id: todoCategory.id,
      ...updateTodoCategoryDto, category, workspace
    });
    const saved = await this.todoCategoryRepository.save(updated);

    return saved;
  }

  async remove(findOneDto: FindOneDto): Promise<TodoCategory> {
    const todoCategory = await this.findOne(findOneDto)
    const deleted = await this.todoCategoryRepository.remove(todoCategory);

    return deleted;
  }
}
