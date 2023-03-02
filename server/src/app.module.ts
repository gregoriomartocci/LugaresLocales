import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from 'config/ormconfig';
import { ArticleModule } from './articles/article.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(),
    ArticleModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
