// todo.entity.ts

import * as bcrypt from 'bcrypt';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @BeforeInsert()
  async hashPassword() {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      console.log(this.password);
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  }
}
