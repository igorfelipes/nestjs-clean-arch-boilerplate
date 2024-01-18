import { Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/domain/dtos'
import { User } from 'src/domain/entities'
import { IDataServices } from 'src/domain/abstracts'
import { UserFactoryService } from 'src/domain/use-cases/user/user-factory.service'

@Injectable()
export class UserUseCases {
  constructor(private dataServices: IDataServices, private userFactoryService: UserFactoryService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto)
    const createdUser = await this.dataServices.users.create(user)
    return { ...createdUser, password: undefined }
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.dataServices.users.getByEmail(email)
    return user
  }
}
