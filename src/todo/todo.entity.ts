// todo.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Column({ default: false })
  completed: boolean;
}
