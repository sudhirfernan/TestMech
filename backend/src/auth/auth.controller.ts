import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { Body, Post, Controller, HttpStatus, HttpCode, UseGuards, Get, Request } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

   
    @HttpCode(HttpStatus.CREATED)
    @Public()
    @Post('register')
    register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto.username, registerDto.password);
}

    @UseGuards(AuthGuard)
    @Get('profile')
    getprofile(@Request() req) {
        return req.user;
    }
}
