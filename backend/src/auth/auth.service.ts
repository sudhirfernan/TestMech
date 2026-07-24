import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private jwtService: JwtService
    ) {}

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
