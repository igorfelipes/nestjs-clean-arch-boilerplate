import { IGenericRepository } from 'src/domain/abstracts/generic-repository.abstract'
import { Repository, FindOptionsWhere } from 'typeorm'

export class MysqlGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>

  constructor(repository: any) {
    this._repository = repository
  }
  getAll(): Promise<T[]> {
    return this._repository.find()
  }
  get(id: string): Promise<T> {
    return this._repository.findOneBy({ id } as unknown as FindOptionsWhere<T>)
  }
  create(item: T): Promise<T> {
    return this._repository.save(item)
  }
  update(id: string, item: any) {
    return this._repository.update(id, item)
  }
}
