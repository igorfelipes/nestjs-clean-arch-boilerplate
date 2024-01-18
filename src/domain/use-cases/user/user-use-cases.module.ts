import { Module } from '@nestjs/common'
import { DataServicesModule } from 'src/domain/data-service/data-services.module'
import { UserFactoryService } from 'src/domain/use-cases/user/user-factory.service'
import { UserUseCases } from 'src/domain/use-cases/user/user.use-cases'

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases]
})
export class UserUseCasesModule {}
