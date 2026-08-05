import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async register(email: string, password: string) {
    const existing = await this.usersService.findOne(email);
    if (existing) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create(email, hashedPassword);

    return { userId: user.userId, email: user.email };
  }

    async signIn(email: string, password: string): Promise<{access_token: string}>{
        const user = await this.usersService.findOne(email);
        if(!user){
            throw new UnauthorizedException('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { email: user.email, sub: user.userId };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
