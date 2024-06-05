import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EventModule } from './event/event.module';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { AuthHelper } from './database/helpers/auth.helper';

@Module({
  imports: [UsersModule, DatabaseModule, EventModule],
  controllers: [AppController],
  providers: [AppService, AuthHelper],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'event', method: RequestMethod.ALL }
      );
  }
}


