import { IUserRepository } from 'src/domain/abstracts/user-repository.abstract'
import { User } from 'src/infra/data-services/mysql/entities/user.entity'
import { MysqlGenericRepository } from 'src/infra/data-services/mysql/mysql-generic-repository'
import { Repository, FindOptionsWhere } from 'typeorm'

export class MysqlUserRepository extends MysqlGenericRepository<User> implements IUserRepository {
  private _userRepository: Repository<User>

  constructor(repository: Repository<User>) {
    super(repository)
    this._userRepository = repository
  }
  getByEmail(email: string): Promise<User> {
    return this._userRepository.findOneBy({ email } as unknown as FindOptionsWhere<User>)
  }
  getAll(): Promise<User[]> {
    return this._userRepository.find()
  }
  get(id: string): Promise<User> {
    return this._userRepository.findOneBy({ id } as unknown as FindOptionsWhere<User>)
  }
  create(item: User): Promise<User> {
    return this._userRepository.save(item)
  }
  update(id: string, item: Partial<User>) {
    return this._userRepository.update(id, item)
  }
}
