import { IGenericRepository } from './generic-repository.abstract'
import { User } from '../entities/user.entity'
import { IUserRepository } from 'src/domain/abstracts/user-repository.abstract'

export abstract class IDataServices {
  abstract users: IGenericRepository<User> & IUserRepository
}
