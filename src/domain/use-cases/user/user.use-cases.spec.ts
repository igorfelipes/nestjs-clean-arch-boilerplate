import { Test } from '@nestjs/testing'
import { mock } from 'jest-mock-extended'
import { IDataServices } from 'src/domain/abstracts'
import { CreateUserDto } from 'src/domain/dtos'
import { User } from 'src/domain/entities'
import { UserFactoryService } from 'src/domain/use-cases/user/user-factory.service'
import { UserUseCases } from 'src/domain/use-cases/user/user.use-cases'

describe('UserUseCases', () => {
  let userUseCases: UserUseCases
  let dataServices: IDataServices
  let userFactoryService: UserFactoryService

  beforeEach(async () => {
    dataServices = mock<IDataServices>()
    userFactoryService = mock<UserFactoryService>()

    const moduleRef = await Test.createTestingModule({
      providers: [
        UserUseCases,
        { provide: IDataServices, useValue: dataServices },
        { provide: UserFactoryService, useValue: userFactoryService }
      ]
    }).compile()

    userUseCases = moduleRef.get<UserUseCases>(UserUseCases)
  })

  describe('createPurchase', () => {
    it('should create a new purchase', async () => {
      const createUserDto: CreateUserDto = {
        email: 'igor@mail.com',
        name: 'Igor',
        password: '123456',
        phone: '83999999999'
      }
      const createdPurchase: User = {
        id: '1',
        email: createUserDto.email,
        name: createUserDto.name,
        password: createUserDto.password
      }

      userFactoryService.createNewUser = jest.fn().mockReturnValue(createdPurchase)
      dataServices.users.create = jest.fn().mockResolvedValue(createdPurchase)

      const result = await userUseCases.createUser(createUserDto)

      expect(result).toEqual(createdPurchase)
      expect(userFactoryService.createNewUser).toHaveBeenCalledWith(createUserDto)
      expect(dataServices.users.create).toHaveBeenCalledWith(createdPurchase)
    })
  })
})
