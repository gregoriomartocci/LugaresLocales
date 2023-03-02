import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from "./auth.service";
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleLogin(): Promise<any> {
    // Esta ruta redirige al usuario al flujo de autenticación de Google.
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleLoginCallback(@Req() req: Request): Promise<any> {
    // Esta ruta maneja el callback de Google y retorna el token JWT al usuario.
    return this.authService.login(req.user);
  }
}
