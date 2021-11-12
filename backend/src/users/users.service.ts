import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import UserEntity from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { compare, encrypt } from '../utils/bcrypt';
import { ObjectId } from 'mongodb';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    if (user) {
      return user;
    }
    throw new HttpException('EMAIL_NOT_EXISTS', HttpStatus.NOT_FOUND);
  }

  async getById(_id: string) {
    const user = await this.usersRepository.findOne({ _id: new ObjectId(_id) });

    if (user) {
      return user;
    }
    throw new HttpException('USER_NOT_EXISTS', HttpStatus.NOT_FOUND);
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, userId: string) {
    const user = await this.getById(userId);

    const isRefreshTokenMatching = await compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );
    if (isRefreshTokenMatching) {
      return { ...user, password: undefined };
    }
  }

  async create(userData: CreateUserDto) {
    const newUser = this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    return newUser;
  }

  async delete(email: string) {
    await this.usersRepository.delete(await this.getByEmail(email));
  }

  async setCurrentRefreshToken(refreshToken: string, userId: string) {
    const currentHashedRefreshToken = await encrypt(refreshToken);
    await this.usersRepository.update(userId, {
      currentHashedRefreshToken,
    });
  }
}