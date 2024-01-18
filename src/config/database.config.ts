import { registerAs } from '@nestjs/config'
import Joi from 'joi'
export const databaseConfig = () =>
  registerAs('database', () => {
    const values = {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      name: process.env.DATABASE_NAME
    }

    const schema = Joi.object({
      host: Joi.string().required(),
      port: Joi.number().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().required()
    })

    const { error } = schema.validate(values, { abortEarly: false })

    if (error) {
      throw new Error(error.message)
    }

    return values
  })
