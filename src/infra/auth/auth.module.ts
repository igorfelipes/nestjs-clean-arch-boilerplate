import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { JwtStrategy } from 'src/infra/auth/strategies'
import { authConfig } from 'src/config/auth.config'

@Module({
  imports: [NestConfigModule.forFeature(authConfig), PassportModule],
  providers: [JwtStrategy],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}
