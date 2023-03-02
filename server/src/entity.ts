import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityExample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}