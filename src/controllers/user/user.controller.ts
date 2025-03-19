import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../core/dtos/create-user.dto';
import { UserUsecase } from '../../use-cases/user.usecase';

@Controller('user')
export class UserController {
  constructor(private userUseCases: UserUsecase) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userUseCases.findAll();
  }
}
