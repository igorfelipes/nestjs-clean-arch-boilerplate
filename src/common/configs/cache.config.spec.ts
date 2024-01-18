import { cacheConfig as cacheConfigRegister } from '@app/common/configs'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Test } from '@nestjs/testing'

describe('CacheConfig', () => {
  let configService: ConfigService
  describe('Cache Config', () => {
    it('should have the appropriate settings', async () => {
      const moduleRef = await Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            ignoreEnvFile: false,
            envFilePath: 'test.env',
            expandVariables: true,
            cache: false,
            isGlobal: true
          }),
          ConfigModule.forFeature(cacheConfigRegister())
        ],
        controllers: [],
        providers: []
      }).compile()

      configService = moduleRef.get<ConfigService>(ConfigService)
      const cacheConfig = configService.get('cache')
      expect(cacheConfig).toHaveProperty('store')
      expect(cacheConfig).toHaveProperty('host')
      expect(cacheConfig).toHaveProperty('port')
      expect(cacheConfig).toHaveProperty('ttl')
      expect(cacheConfig).toHaveProperty('prefix')
      expect(cacheConfig).toHaveProperty('password')
    })
    it('should throw a error if appropriate app configs is not present', async () => {
      const compile = Test.createTestingModule({
        imports: [
          ConfigModule.forRoot({
            ignoreEnvFile: false,
            envFilePath: 'test.env',
            expandVariables: true,
            cache: false,
            isGlobal: true
          }),
          ConfigModule.forFeature(cacheConfigRegister())
        ],
        controllers: [],
        providers: []
      }).compile()
      delete process.env.CACHE_PORT
      await expect(compile).rejects.toThrow()
    })
  })
})
