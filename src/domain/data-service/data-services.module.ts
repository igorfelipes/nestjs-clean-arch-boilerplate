import { Module } from '@nestjs/common'
import { MysqlDataServicesModule } from 'src/infra/data-services/mysql/mysql-data-services.module'

@Module({
  imports: [MysqlDataServicesModule],
  exports: [MysqlDataServicesModule]
})
export class DataServicesModule {}
