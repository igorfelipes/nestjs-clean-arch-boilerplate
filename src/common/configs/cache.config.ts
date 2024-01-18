import { registerAs } from '@nestjs/config'
import * as Joi from 'joi'

export const cacheConfig = () =>
  registerAs('cache', () => {
    const values = {
      store: process.env.CACHE_STORE,
      host: process.env.CACHE_HOST,
      port: parseInt(process.env.CACHE_PORT),
      ttl: parseInt(process.env.CACHE_TTL),
      prefix: process.env.CACHE_PREFIX,
      password: process.env.CACHE_PASSWORD
    }
    const schema = Joi.object({
      store: Joi.string().required(),
      host: Joi.string().required(),
      ttl: Joi.number().required(),
      port: Joi.number().required(),
      prefix: Joi.string().required(),
      password: Joi.string()
    })
    const { error } = schema.validate(values, { abortEarly: false })
    if (error) {
      throw new Error(error.message)
    }
    return values
  })
