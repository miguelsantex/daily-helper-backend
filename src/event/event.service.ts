import { Inject, Injectable } from '@nestjs/common';
import { Event } from '../interfaces/event.interface'
import { Model } from 'mongoose';

@Injectable()
export class EventService {
  constructor(@Inject('EVENT_MODEL')
  private eventModel: Model<Event>
  ) { }

  create(event: Event): Promise<Event> {
    const data = new this.eventModel(event)
    return data.save()
  }

  async list(userID: string): Promise<any> {
    return await this.eventModel.find({ user_id: userID })
  }

  delete(eventID: string): Promise<any> {
    return this.eventModel.deleteOne({ _id: eventID })
  }
}
