import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  username: process.env.DATABASE_USERNAME || 'lugareslocales',
  password: process.env.DATABASE_PASSWORD || 'lugareslocales',
  database: process.env.DATABASE_NAME || 'lugareslocales',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};

export default typeOrmConfig;
