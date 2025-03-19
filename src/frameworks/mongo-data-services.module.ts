import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Journal, JournalSchema } from './model/journal.entity';
import { DATA_BASE_CONFIGURATION } from '../configuration';
import { IdataServices } from '../core/abstracts/data-services.abstract';
import { MongoDataService } from './typeorm-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Journal.name, schema: JournalSchema }]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IdataServices,
      useClass: MongoDataService,
    },
  ],
  exports: [IdataServices],
})
export class MongoDataServicesModule {}
