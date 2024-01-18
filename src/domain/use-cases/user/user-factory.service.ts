import { Injectable } from '@nestjs/common'
import { CreateUserDto } from 'src/domain/dtos'
import { User } from 'src/domain/entities'
import brcrypt from 'bcrypt'

@Injectable()
export class UserFactoryService {
  createNewUser(createPurchaseDto: CreateUserDto) {
    const newUser = new User()
    newUser.name = createPurchaseDto.name
    newUser.email = createPurchaseDto.email
    newUser.password = brcrypt.hashSync(createPurchaseDto.password, 10)
    newUser.phone = createPurchaseDto.phone

    return newUser
  }
}
