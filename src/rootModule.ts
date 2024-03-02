import { Module } from '@nestjs/common';
import { PlaneController } from './planeController';
import { PlaneService } from './plane.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CheckOnlineFlightsService } from './check-online-flights/check-online-flights.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [PlaneController],
  providers: [PlaneService, CheckOnlineFlightsService],
})
export class RootModule {}
