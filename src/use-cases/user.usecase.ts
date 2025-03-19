import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../core/dtos/create-user.dto';
import { IdataServices } from '../core/abstracts/data-services.abstract';
import { Journal } from '../core/entities/journal.entity';

@Injectable()
export class UserUsecase {
  constructor(private dataservices: IdataServices) {}
  create(createUserDto: CreateUserDto) {
    return this.dataservices.journals.create(createUserDto);
  }

  findAll(): Promise<Journal[]> {
    return this.dataservices.journals.findAll();
  }
}
