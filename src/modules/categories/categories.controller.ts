import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FindOneDto } from './dto/find-one.tdo';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('create')
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category>{
    return this.categoriesService.create(createCategoryDto);
  }

  @Get('all')
  findAll(): Promise<any> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param() findOneDto: FindOneDto): Promise<Category | null> {
    return this.categoriesService.findOne(findOneDto);
  }

  @Put(':id')
  update(@Param()findOneDto: FindOneDto, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoriesService.update(findOneDto, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param() findOneDto: FindOneDto): Promise<Category> {
    return this.categoriesService.remove(findOneDto);
  }
}
