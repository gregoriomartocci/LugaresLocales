import { Injectable } from '@nestjs/common';
import { CategoryDto } from './category.dto';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  async findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async create(categoryDto: CategoryDto): Promise<Category> {
    const category = new Category();
    category.name = categoryDto.name;
    category.description = categoryDto.description;
    return this.categoryRepository.create(category);
  }

  async update(id: string, categoryDto: CategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);
    category.name = categoryDto.name || category.name;
    category.description = categoryDto.description || category.description;
    return this.categoryRepository.create(category);
  }

  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
