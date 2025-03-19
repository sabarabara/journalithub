import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../core/dtos/create-user.dto';
import { IdataServices } from '../core/abstracts/data-services.abstract';

@Injectable()
export class UserUsecase {
  constructor(private dataservices: IdataServices) {}
  create(createUserDto: CreateUserDto) {
    console.log(2);
    this.dataservices.journals.create(createUserDto);
  }

  findAll() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    this.dataservices.journals.findAll();
  }
}
