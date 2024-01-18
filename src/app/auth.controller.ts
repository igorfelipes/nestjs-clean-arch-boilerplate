import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LoginDto } from 'src/domain/dtos/auth.dto'
import { AuthUseCases } from 'src/domain/use-cases/auth/auth.use-cases'

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(private authUseCases: AuthUseCases) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authUseCases.login(loginDto)
  }
}
