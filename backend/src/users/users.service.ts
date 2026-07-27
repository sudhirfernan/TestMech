import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository.js';
import { User } from './dto/user.entity';



@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>
    ) {}

    async findOne(username: string): Promise<User | undefined> {
        const user = await this.usersRepository.findOne({ where: { username } });
        return user ?? undefined;
    }

    async create(username:string , password:string): Promise<User> {
        const user = this.usersRepository.create({ username, password });
        return this.usersRepository.save(user);
    }
}
