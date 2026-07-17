import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    login(loginDto: LoginDto){
        const { email, password } = loginDto;

        return{
            message: 'Login successful',
            email: email,
            password: password
        };
}
}
