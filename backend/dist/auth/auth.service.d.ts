import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    login(loginDto: LoginDto): {
        message: string;
        email: string;
        password: string;
    };
}
