import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async register(username: string, password: string) {
    const existing = await this.usersService.findOne(username);
    if (existing) {
      throw new ConflictException('Username already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create(username, hashedPassword);

    return { userId: user.userId, username: user.username };
  }

    async signIn(username: string, password: string): Promise<{access_token: string}>{
        const user = await this.usersService.findOne(username);
        if(user?.password !== password){
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload =  { sub: user.userId, username: user.username}
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
