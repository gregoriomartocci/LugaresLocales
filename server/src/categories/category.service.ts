import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { CategoryDto } from './category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(categoryDto: CategoryDto): Promise<Category> {
    return this.categoryRepository.save(categoryDto);
  }
}
