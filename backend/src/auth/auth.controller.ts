import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/user.dto';
import { Body, Post, Controller, HttpStatus, HttpCode, UseGuards, Get, Request } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

   
    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getprofile(@Request() req) {
        return req.user;
    }
}
