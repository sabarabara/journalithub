import { IGenericRepository } from '../core/abstracts/generic-repository.abstract';
import { Model } from 'mongoose';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  create(item: T): Promise<T> {
    console.log(3);
    return this._repository.create(item);
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  findAll(): Promise<T[]> {
    return this._repository.find();
  }
}
