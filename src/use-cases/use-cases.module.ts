import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user/user.controller';
import { UserUsecase } from './user.usecase';
import { DataServicesModule } from '../services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  controllers: [UserController],
  providers: [UserUsecase],
  exports: [UserUsecase],
})
export class UserModule {}
