import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserModule } from './use-cases/use-cases.module';
import { DataServicesModule } from './services/data-services/data-services.module';

@Module({
  imports: [UserModule, DataServicesModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
