import { IGenericRepository } from './generic-repository.abstract';
import { Journal } from '../entities/journal.entity';

export abstract class IdataServices {
  abstract journals: IGenericRepository<Journal>;
}
