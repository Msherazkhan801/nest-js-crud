import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
// import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(
    createUserDto: CreateUserDto,
  ): Promise<User | { message: string }> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      return { message: 'user already exists' };
    }

    const newUser = this.userRepository.create(createUserDto);
    newUser.hashPassword();
    const savedUser = await this.userRepository.save(newUser);

    return savedUser;
  }

  async login(
    createUserDto: CreateUserDto,
  ): Promise<User | { message: string }> {
    const user = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (user) {
      return user;
    }

    return { message: 'Email does not exist' };
  }

  findAll() {
    return this.userRepository.find({
      select: ['id', 'email', 'username'],
    });
  }

  findOne(id: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id: id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}
