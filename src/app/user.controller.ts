import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common'

import { UserUseCases } from 'src/domain/use-cases/user/user.use-cases'
import { CreateUserDto } from 'src/domain/dtos'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/infra/auth/guards/jwt-auth.guard'
import { UserId } from 'src/infra/decorators/user-id.decorator'

@ApiTags('Users')
@Controller('api/user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Post('signup')
  async createPurchase(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('')
  teste(@UserId() userId: string) {
    console.log(userId)
    return userId
  }
}
