import { User } from 'src/domain/entities'

export abstract class IUserRepository {
  abstract getByEmail(email: string): Promise<User>
}
