import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { DataSource } from 'typeorm'
import { User } from './entities/user.entity'
import { IDataServices } from 'src/domain'
import { MysqlUserRepository } from 'src/infra/data-services/mysql/mysql-user-repository'

@Injectable()
export class MysqlDataServices implements IDataServices, OnApplicationBootstrap {
  users: MysqlUserRepository

  constructor(private readonly dataSource: DataSource) {}

  onApplicationBootstrap() {
    this.users = new MysqlUserRepository(this.dataSource.getRepository(User))
  }
}
