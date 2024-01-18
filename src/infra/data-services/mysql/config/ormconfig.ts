import { DataSource } from 'typeorm'
import { ConfigService } from '@nestjs/config'

export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: DataSource,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.name'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../../../../../db/migrations/**/*{.ts,.js}']
        // synchronize: true
      })

      return dataSource.initialize()
    }
  }
]
