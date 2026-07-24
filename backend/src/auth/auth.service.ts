import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async signIn(username: string, password: string): Promise<any>{
        const user = await this.usersService.findOne(username);
        if(user?.password === password){
            throw new UnauthorizedException('Invalid credentials');
        }

        const { pass, ...result } = user;
        return result;
    }
}
