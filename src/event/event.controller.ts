import { Body, Controller, Delete, Get, Param, Post, Req, Request } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from '../interfaces/event.interface'
import { CustomRequest } from 'src/middlewares/auth.middleware';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {
  }

  @Post('')
  async createEvent(
    @Body() data: Event,
    @Req() request: CustomRequest,
  ): Promise<Event> {
    const user = request.user

    data.user_id = user.userID
    return await this.eventService.create(data);
  }

  @Get('')
  async list(
    @Req() request: CustomRequest,
  ): Promise<any> {
    const { userID } = request.user
    return await this.eventService.list(userID)
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ): Promise<any> {
    return await this.eventService.delete(id)
  }
}
