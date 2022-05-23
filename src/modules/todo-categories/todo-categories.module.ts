import { Module } from '@nestjs/common';
import { TodoCategoriesService } from './todo-categories.service';
import { TodoCategoriesController } from './todo-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoCategory } from './entities/todo-category.entity';
import { CategoriesModule } from '../categories/categories.module';
import { WorkspacesModule } from '../workspaces/workspaces.module';


@Module({
  imports: [TypeOrmModule.forFeature([TodoCategory]),CategoriesModule,WorkspacesModule],
  controllers: [TodoCategoriesController],
  providers: [TodoCategoriesService]
  
})
export class TodoCategoriesModule {}
