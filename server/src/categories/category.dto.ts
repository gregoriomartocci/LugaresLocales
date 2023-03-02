import { Category } from './category.entity';

export class CategoryDto {
  name: string;
  description: string;
  image: string;
  slug: string;
  parentCategory: Category;
  subcategories: Category[];
}
