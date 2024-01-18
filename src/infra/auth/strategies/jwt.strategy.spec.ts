import { ConfigService } from '@nestjs/config'
import { mock } from 'jest-mock-extended'
import { JwtStrategy } from 'src/infra/auth/strategies/jwt.strategy'

describe('JwtStrategy', () => {
  let jwtStrategy: JwtStrategy

  beforeEach(async () => {
    jwtStrategy = new JwtStrategy(
      mock<ConfigService>({
        get: jest.fn().mockReturnValue('dummy')
      })
    )
  })

  it('should be defined', () => {
    expect(jwtStrategy).toBeDefined()
  })
  describe('validate', () => {
    it('should return payload', async () => {
      const payload = mock<any>()
      const result = await jwtStrategy.validate(payload)
      expect(result).toEqual(true)
    })
  })
})
