import { registerAs } from '@nestjs/config'
import Joi from 'joi'

export interface IAuthenticateConfig {
  jwt: {
    secret: string
    expiresIn: string
  }
}

export const authConfig = registerAs('auth', (): IAuthenticateConfig => {
  const values: IAuthenticateConfig = {
    jwt: {
      expiresIn: process.env.JWT_EXPIRES_IN,
      secret: process.env.JWT_SECRET
    }
  }

  const schema = Joi.object({
    jwt: Joi.object({
      secret: Joi.string().required(),
      expiresIn: Joi.string().required()
    }).required()
  }).required()

  const { error } = schema.validate(values, { abortEarly: false })

  if (error) {
    throw new Error(error.message)
  }

  return values
})
