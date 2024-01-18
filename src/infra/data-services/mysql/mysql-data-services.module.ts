import { Module } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { MysqlDataServices } from './mysql-data-services.service'
import { IDataServices } from 'src/domain'
import { databaseProviders } from './config/ormconfig'

@Module({
  imports: [],
  controllers: [],
  providers: [
    ...databaseProviders,
    {
      provide: IDataServices,
      useClass: MysqlDataServices
    }
  ],
  exports: [DataSource, IDataServices]
})
export class MysqlDataServicesModule {}
