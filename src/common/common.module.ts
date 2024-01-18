import { appConfig } from './configs'
import { CommonModuleOptions } from './interfaces'
import { AppConfigService } from './services/app-config.service'

import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({})
export class CommonModule {
  static register(options: CommonModuleOptions): DynamicModule {
    return {
      module: CommonModule,
      imports: [ConfigModule.forRoot({ ...options.configModule }), ConfigModule.forFeature(appConfig())],
      providers: [AppConfigService],
      controllers: [],
      exports: [AppConfigService]
    }
  }
}
