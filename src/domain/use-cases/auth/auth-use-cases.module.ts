import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { DataServicesModule } from 'src/domain/data-service/data-services.module'
import { AuthUseCases } from 'src/domain/use-cases/auth/auth.use-cases'

@Module({
  imports: [
    DataServicesModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('auth.jwt.secret'),
        signOptions: {
          expiresIn: configService.get<string>('auth.jwt.expiresIn')
        }
      }),
      imports: [ConfigModule]
    })
  ],
  providers: [AuthUseCases],
  exports: [AuthUseCases]
})
export class AuthUseCasesModule {}
