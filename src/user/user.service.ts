import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';
import { encryptWithAES } from '../util/crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneBy(username: string) {
    return await this.userRepository.findOneBy({ username: username });
  }

  async create(user: Partial<User>) {
    if (!user.username) {
      throw new HttpException('Username is Empty!', HttpStatus.BAD_REQUEST);
    }
    if (!user.password) {
      throw new HttpException('Password is Empty!', HttpStatus.BAD_REQUEST);
    }

    if (await this.findOneBy(user.username)) {
      throw new HttpException(
        'Username already exists!',
        HttpStatus.BAD_REQUEST,
      );
    }

    user.password = encryptWithAES(user.password);

    this.userRepository.save(this.userRepository.create(user));
    return 'Successfully Saved!';
  }
}
