import { AuthService } from './auth.service';
import { LoginDto } from './dto/user.dto';
import { Body, Post, Controller, HttpStatus, HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
