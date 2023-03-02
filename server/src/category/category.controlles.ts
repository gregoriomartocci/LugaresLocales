import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryDto } from './category.dto';

import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoriesService: CategoryService) {}

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  async create(@Body() categoryDto: CategoryDto) {
    return this.categoriesService.create(categoryDto);
  }
}
