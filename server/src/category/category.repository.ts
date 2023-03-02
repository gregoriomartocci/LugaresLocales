import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Category> {
    return this.repository.findOne({ where: { id } });
  }

  async create(category: Category): Promise<Category> {
    return this.repository.save(category);
  }

  async update(id: string, category: Category): Promise<Category> {
    await this.repository.update(id, category);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
