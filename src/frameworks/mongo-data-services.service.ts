import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IdataServices } from '../core/abstracts/data-services.abstract';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Journal, JournalDocument } from './model/journal.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoDataService implements IdataServices, OnApplicationBootstrap {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  journals: MongoGenericRepository<Journal>;

  constructor(
    @InjectModel(Journal.name)
    private JournalRepository: Model<JournalDocument>,
  ) {}

  onApplicationBootstrap(): any {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    this.journals = new MongoGenericRepository<Journal>(this.JournalRepository);
  }
}
