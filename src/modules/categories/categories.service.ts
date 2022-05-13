import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneDto } from '../users/dto/find-one.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ){}


  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const created = await this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(created);
  }

  async findAll(): Promise<any> {

    return await this.categoryRepository.find();
  }

  async findOne(findOneDto: FindOneDto): Promise<Category | null> {
    const { id } = findOneDto;
    const category = await this.categoryRepository.findOne({
      where: {
        id
      }
    });
    if(!category) throw new NotFoundException(`Category with id: ${id} does not exist`);
     
    return category || null ;
  }

  async update(findOneDto: FindOneDto, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.findOne(findOneDto)
    const updated = await this.categoryRepository.preload({
      id: category.id,
      ...updateCategoryDto
    });

    return await this.categoryRepository.save(updated);
  }

  async remove(findOneDto: FindOneDto): Promise<Category> {
    const category = await this.findOne(findOneDto)
    return await this.categoryRepository.remove(category);
  }
}
