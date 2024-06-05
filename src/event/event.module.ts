import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { eventProviders } from './event.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [EventService, ...eventProviders],
  controllers: [EventController]
})
export class EventModule { }
