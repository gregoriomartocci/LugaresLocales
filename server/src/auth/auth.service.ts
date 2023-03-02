import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    // Aquí validas que el usuario esté autorizado a utilizar la app y lo registras en caso de ser necesario.
  }

  async login(user: User): Promise<{ access_token: string }> {
    // Aquí creas y retornas el token JWT.
  }
}
