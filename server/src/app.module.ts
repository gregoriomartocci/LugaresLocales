import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'config/ormconfig';
import { ArticleModule } from './articles/article.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ArticleModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
