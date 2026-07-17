import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Body, Post, Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto);
    }
}
