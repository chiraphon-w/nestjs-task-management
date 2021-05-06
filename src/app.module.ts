import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TasksModule],
  providers: [TasksService],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
