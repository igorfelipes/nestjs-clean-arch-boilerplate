import { Injectable, UnauthorizedException } from '@nestjs/common'
import { User } from 'src/domain/entities'
import { IDataServices } from 'src/domain/abstracts'
import brcrypt from 'bcrypt'
import { LoginDto } from 'src/domain/dtos/auth.dto'
import { Auth } from 'src/domain/entities/auth.entity'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthUseCases {
  constructor(private dataServices: IDataServices, private jwtService: JwtService) {}
  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.dataServices.users.getByEmail(email)
    if (!user) return null
    const isSamePassword = await brcrypt.compare(password, user.password)
    if (user && isSamePassword) {
      return user
    }
    return null
  }

  async login(loginDto: LoginDto): Promise<Auth> {
    const isValidUser = await this.validateUser(loginDto.email, loginDto.password)
    if (!isValidUser) throw new UnauthorizedException('Invalid credentials')
    return {
      accessToken: this.jwtService.sign({ userId: isValidUser.id })
    }
  }
}
