import { Test, TestingModule } from '@nestjs/testing';
import { TodoCategoriesController } from './todo-categories.controller';
import { TodoCategoriesService } from './todo-categories.service';

describe('TodoCategoriesController', () => {
  let controller: TodoCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoCategoriesController],
      providers: [TodoCategoriesService],
    }).compile();

    controller = module.get<TodoCategoriesController>(TodoCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
